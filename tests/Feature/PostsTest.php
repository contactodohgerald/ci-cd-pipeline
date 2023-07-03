<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Providers\RouteServiceProvider;
use Tests\TestCase;

class PostsTest extends TestCase
{
    use RefreshDatabase;

    public function test_post_can_be_created(): void
    {
        $user = User::factory()->create();

        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $this->assertAuthenticated();

        $response = $this->post('/post', [
            'user_id' => $user->id,
            'title' => "New Title",
            'category' => "Caetgory",
            'post' =>'some content here...'
        ]);

        $response->assertRedirect(RouteServiceProvider::INDEX);
    }
}
