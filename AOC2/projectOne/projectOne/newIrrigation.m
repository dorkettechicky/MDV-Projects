//
//  newIrrigation.m
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "newIrrigation.h"

@implementation newIrrigation

@synthesize numberZones, water, typeTimer,  costPerZone;

//Customize init for repairs
-(id)init
{
    self = [super init];
    if (self !=nil)
    {
        // set defaults
        [self setManHours:3];
        [self setCostPerManHour:35];
        [self setTypeTimer:@"Rainbird Elite"];
        [self setNumberZones:4];
        [self setCostPerZone:150];
        
    }
    return self;
}


-(void)calcInvoice
{
    //set price for water type
    if (water == CITY) {
        [self setManHours:4];
        [self setNumberZones:6];
        [self setCostPerZone:150];
        [self setCostPerManHour:25];
        [self setTypeTimer:@"Hunter"];
        [self setInvoiceTotal:(self.manHours * self.costPerManHour + self.numberZones * self.costPerZone)];
    }else if (water == DEEPWELL){
        [self setManHours:3];
        [self setNumberZones:5];
        [self setCostPerZone:200];
        [self setCostPerManHour:25];
        [self setTypeTimer:@"Rainbird"];
        [self setInvoiceTotal:(self.manHours * self.costPerManHour + self.numberZones * self.costPerZone)];
    }else if (water == SHALLOWWELL){
        [self setManHours:3];
        [self setNumberZones:4];
        [self setCostPerZone:125];
        [self setCostPerManHour:25];
        [self setTypeTimer:@"Rainbird XYZ"];
        [self setInvoiceTotal:(self.manHours * self.costPerManHour + self.numberZones * self.costPerZone)];
    }else if (water == RECLAIM){
        [self setManHours:2];
        [self setNumberZones:3];
        [self setCostPerZone:100];
        [self setCostPerManHour:25];
        [self setTypeTimer:@"Hunter Elite"];
        [self setInvoiceTotal:(self.manHours * self.costPerManHour + self.numberZones * self.costPerZone)];
    }else{
        NSLog(@"No new zones needed.");
    }
    
    
}

@end
