<?php

namespace App\Http\Controllers;

use App\Helpers\TelegramHelper;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        // Validate request
        $validated = $request->validate([
            'name'       => 'nullable|string|max:255',
            'phone'      => 'required|string|min:8|max:20',
            'email'      => 'nullable|email|max:255',
            'address'    => 'nullable|string|max:255',
            'note'       => 'nullable|string',
            'total'      => 'required|numeric',
            'items'      => 'required|array',
            'items.*.item_id' => 'required|exists:items,id',
            'items.*.price'   => 'required|numeric',
            'items.*.discount' => 'nullable|numeric',
            'items.*.discount_type' => 'nullable|string|in:percentage,fixed',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.total'    => 'required|numeric',
        ]);

        try {
            DB::beginTransaction();

            // Create order
            $order = Order::create([
                'name'    => $validated['name'] ?? null,
                'phone'   => $validated['phone'],
                'email'   => $validated['email'] ?? null,
                'address' => $validated['address'] ?? null,
                'note'    => $validated['note'] ?? null,
                'total'   => $validated['total'],
            ]);


            // Create order items
            foreach ($validated['items'] as $item) {
                OrderItem::create([
                    'order_id'      => $order->id,
                    'item_id'       => $item['item_id'],
                    'price'         => $item['price'],
                    'discount'      => $item['discount'] ?? 0,
                    'discount_type' => $item['discount_type'] ?? 'percentage',
                    'quantity'      => $item['quantity'],
                    'total'         => $item['total'],
                ]);
            }

            DB::commit();

            $result = TelegramHelper::sendOrderItems($order);
            if ($result['success']) {
                return back()->with('success', 'Order placed successfully!');
            } else {
                return back()->with('error', $result['message']);
            }
        } catch (\Exception $e) {
            DB::rollback();

            return back()->withErrors([
                'general' => 'Failed to place order. ' . $e->getMessage()
            ]);
        }
    }
}
