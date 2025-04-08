<?php

namespace Database\Seeders;

use App\Models\Folder;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        // User::factory()->create([
        //     'name' => 'Admin',
        //     'email' => 'admin@gmail.com',
        //     'password' => Hash::make('12345678'),
        // ]);
        Folder::factory()->createMany([
            ['name' => 'Images'],
            ['name' => 'Files'],
        ]);

        // \App\Models\Project::factory(30)->create();

    }
}
