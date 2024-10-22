<?php
// controller generated with the help of chatgpt 
namespace app\Http\Controllers;

use Illuminate\Routing\Controller;


class EventController extends Controller
{


//    get all events
    public function index() {
        $events = Event::all();
        return response()->json($events);
    }

//    create new event
public function create(Request $request) {
        $validatedData = $request->validate([
            'name'=> 'required|max:255',
            'date'=> 'required|date',
            'description'=>'nullable',
            'visibility'=>'required|in:Public,Private',
            'recurring'=>'nullable|boolean'
        ]);
        $event = Event::create($validatedData);
        return response()->json($event,201);
}

//    edit event
public function update(Request $request,$id){
        $event = Event::findOrFail($id);
        $event->update($request->all());
        return response()->json($event);
}

//    delete event
public function delete($id){
        $event = Event::findOrFail($id);
        $event->delete();
        return response()->json(null,204);

}


}
