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
    float weaponCost = 854.00f;
    int goldOnHand = 100;
    float awardPerKill = 6.5f;
    int goldNeeded = (int)weaponCost - goldOnHand;
    int killsNeeded = goldNeeded / awardPerKill;
    
    NSLog(@"The Zombie Frogs are taking over the planet!");
    NSLog(@"My weapon is old, but a new one will cost %.2f gold pieces, I only have %d gold on hand, how will I ever get to %d.", weaponCost, goldOnHand, (int)weaponCost);
    NSLog(@"For every Zombie Frog killed, will earn %.1f gold, so will need to kill %d Zombie Frogs.", awardPerKill, killsNeeded);
    
    
    //For loop
    
    for (int i = 116; i>0; i-=8)
    {
        NSLog(@"There are %d Zombie Frogs left to kill", i);
    }
    NSLog(@"WooHoo, I have the %.2f gold pieces to get the new weapon!", weaponCost);
    
    //If Else If Else & Conditional
    
    BOOL isDead = YES;
    int totalHealth = 20;
    int gainHealth = 1;
    int tookHit = 3;
    
    
    if (((totalHealth >= 5) && (gainHealth <=1)) || (isDead == NO)) {
        NSLog(@"Still kicking, I have %d health remaining!", totalHealth);
    }   else if ((totalHealth == 0) && (isDead == YES)){
        NSLog(@"You are dead, try again");
    }   else    {
        NSLog(@"Your health is at %d, be careful not to get hit, you will lose %d of your health points.", totalHealth, tookHit);
        
    }
    
    //While & nested loops
    
    
    int frogZombies = 20;
    
    
    while (totalHealth >=1) {
        totalHealth--;
        NSLog(@"You took a hit from a Zombie Frog, you have %d health remaining.", totalHealth);
        
        while (frogZombies > 2){
            
            frogZombies-=2;
            NSLog(@"There are still %d Zombie Frogs to kill, get busy!", frogZombies);
            
        }
    }
    NSLog(@"You are dead, please insert another quarter to play again!");
    
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
