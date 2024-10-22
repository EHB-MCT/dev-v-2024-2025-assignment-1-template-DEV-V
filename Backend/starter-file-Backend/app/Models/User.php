<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
   protected $fillable = ['username','email','password'];

   public function events() {
       return $this->hasMany(Event::class);
   }

   public function friends() {
       return $this->belongsToMany(User::class, 'friends','user_id','friend_id');
   }

}
