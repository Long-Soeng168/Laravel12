<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Project
        Permission::firstOrCreate(['name' => 'project view']);
        Permission::firstOrCreate(['name' => 'project create']);
        Permission::firstOrCreate(['name' => 'project update']);
        Permission::firstOrCreate(['name' => 'project delete']);

        // Heading
        Permission::firstOrCreate(['name' => 'heading view']);
        Permission::firstOrCreate(['name' => 'heading create']);
        Permission::firstOrCreate(['name' => 'heading update']);
        Permission::firstOrCreate(['name' => 'heading delete']);

        // Link
        Permission::firstOrCreate(['name' => 'link view']);
        Permission::firstOrCreate(['name' => 'link create']);
        Permission::firstOrCreate(['name' => 'link update']);
        Permission::firstOrCreate(['name' => 'link delete']);

        // Application Info
        Permission::firstOrCreate(['name' => 'application_info view']);
        Permission::firstOrCreate(['name' => 'application_info create']);
        Permission::firstOrCreate(['name' => 'application_info update']);
        Permission::firstOrCreate(['name' => 'application_info delete']);

        // Post
        Permission::firstOrCreate(['name' => 'post view']);
        Permission::firstOrCreate(['name' => 'post create']);
        Permission::firstOrCreate(['name' => 'post update']);
        Permission::firstOrCreate(['name' => 'post delete']);

        // Page
        Permission::firstOrCreate(['name' => 'page view']);
        Permission::firstOrCreate(['name' => 'page create']);
        Permission::firstOrCreate(['name' => 'page update']);
        Permission::firstOrCreate(['name' => 'page delete']);

        // Banner (deduplicated)
        Permission::firstOrCreate(['name' => 'banner view']);
        Permission::firstOrCreate(['name' => 'banner create']);
        Permission::firstOrCreate(['name' => 'banner update']);
        Permission::firstOrCreate(['name' => 'banner delete']);

        // User
        Permission::firstOrCreate(['name' => 'user view']);
        Permission::firstOrCreate(['name' => 'user create']);
        Permission::firstOrCreate(['name' => 'user update']);
        Permission::firstOrCreate(['name' => 'user delete']);

        // role
        Permission::firstOrCreate(['name' => 'role view']);
        Permission::firstOrCreate(['name' => 'role create']);
        Permission::firstOrCreate(['name' => 'role update']);
        Permission::firstOrCreate(['name' => 'role delete']);

         // permission
         Permission::firstOrCreate(['name' => 'permission create']);
         Permission::firstOrCreate(['name' => 'permission update']);
         Permission::firstOrCreate(['name' => 'permission delete']);

         // type
         Permission::firstOrCreate(['name' => 'type view']);
         Permission::firstOrCreate(['name' => 'type create']);
         Permission::firstOrCreate(['name' => 'type update']);
         Permission::firstOrCreate(['name' => 'type delete']);

        // Create roles
        $adminRole = Role::firstOrCreate(['name' => 'Admin']);
        // Give all existing permissions to the admin role
        $adminRole->syncPermissions(Permission::all());

        $editorRole = Role::firstOrCreate(['name' => 'Editor']);
        $userRole = Role::firstOrCreate(['name' => 'User']);
    }
}