<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Message extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'email',
        'text',
        'read',
    ];

    protected static function booted(): void
    {
        static::creating(function ($message) {
            $message->slug = Str::slug(Str::limit($message->name . '-' . Str::uuid(), 50, ''));
        });
    }

    protected $casts = [
        'read' => 'boolean',
    ];
}
