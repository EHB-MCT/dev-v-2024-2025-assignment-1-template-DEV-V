//
//  Challenge_1App.swift
//  Challenge 1
//
//  Created by Guillaume Dochy on 26/09/2024.
//

import SwiftUI

@main
struct Challenge_1App: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
