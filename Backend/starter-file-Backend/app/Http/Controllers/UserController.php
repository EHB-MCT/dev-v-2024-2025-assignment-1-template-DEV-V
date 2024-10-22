<?php
// controller generated with the help of chatgpt
namespace app\Http\Controllers;

use Illuminate\Routing\Controller;

class UserController extends Controller
{

//    get friends
    public function friends($userId){
        $user = User::findOrFail($userId);
        return response()->json($user->friends);
    }

//    add friend
public function addFriend(Request $request, $userId) {
        $user = User::findOrFail($userId);
        $friend = User::findOrFail($request-> friend_id);

        $user->friends()->attach($friend);
        return response()->json(['message' => 'Friend added successfully']);
}

}
