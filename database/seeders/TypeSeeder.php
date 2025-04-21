<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Post Types
        Type::firstOrCreate([
            'type' => 'content',
            'type_of' => 'post',
        ]);
        Type::firstOrCreate([
            'type' => 'link',
            'type_of' => 'post',
        ]);

        // Page Types
        Type::firstOrCreate([
            'type' => 'content',
            'type_of' => 'page',
        ]);
        Type::firstOrCreate([
            'type' => 'link',
            'type_of' => 'page',
        ]);

        // Banner Types
        Type::firstOrCreate([
            'type' => 'image',
            'type_of' => 'banner',
        ]);
        Type::firstOrCreate([
            'type' => 'multi_images',
            'type_of' => 'banner',
        ]);
        Type::firstOrCreate([
            'type' => 'video',
            'type_of' => 'banner',
        ]);
        Type::firstOrCreate([
            'type' => 'embed',
            'type_of' => 'banner',
        ]);

        // Link Types
        Type::firstOrCreate([
            'type' => 'social_media',
            'type_of' => 'link',
        ]);
        Type::firstOrCreate([
            'type' => 'contact',
            'type_of' => 'link',
        ]);
    }
}
