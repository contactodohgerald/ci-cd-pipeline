<?php

namespace App\Models;

use App\Traits\GuidId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory, SoftDeletes, GuidId;

    protected $fillable = [
        'user_id',
        'title',
        'category',
        'post',
        'reply_count',
        'status',
    ];

    protected $casts = [
        'id' => 'string'
    ];
}
