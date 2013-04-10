//
//  AppDelegate.m
//  Project1
//
//  Created by Patti Dacosta on 4/9/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "AppDelegate.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    // Override point for customization after application launch.
    self.window.backgroundColor = [UIColor whiteColor];
    [self.window makeKeyAndVisible];
    //Project1
    //Casting 
    int weaponCost = 853;
    int goldOnHand = 100;
    float awardPerKill = 1.5;
    int goldNeeded = weaponCost - goldOnHand;
    float killsNeeded = goldNeeded / awardPerKill;
    
    NSLog(@"The Zombie Frogs are taking over the planet!");
    NSLog(@"My weapon is old, but a new one will cost %d gold pieces, I only have %d gold on hand.", weaponCost, goldOnHand);
    NSLog(@"For every Zombie Frog I kill, I will earn %.1f gold", awardPerKill);
    NSLog(@"To earn enough gold, will need to kill %.0f Zombie Frogs", killsNeeded);
    
    
    
    
    
    
    
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application
{
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application
{
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later. 
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application
{
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application
{
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
