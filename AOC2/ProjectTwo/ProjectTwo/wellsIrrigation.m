//
//  wellsIrrigation.m
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "wellsIrrigation.h"

@implementation wellsIrrigation

@synthesize permitFee, depthFeet, costPerFoot,  inspection, well;

//Customize init for well service
-(id)init
{
    self = [super init];
    if (self !=nil)
    {
        // set defaults
        [self setManHours:5];
        [self setCostPerManHour:35];
        [self setDepthFeet:300];
        [self setPermitFee:95];
        [self setInspection:@"friday"];
        
    }
    return self;
}


-(int)calcInvoice
{
    //set price for well service
    if (well == SLEEVE) {
        [self setManHours:1];
        [self setDepthFeet:45];
        [self setCostPerFoot:2];
        [self setCostPerManHour:75];
        [self setInspection:@"tuesday"];
        
    }else if (well == DEEP){
        [self setManHours:8];
        [self setDepthFeet:530];
        [self setCostPerFoot:2];
        [self setCostPerManHour:15];
        [self setInspection:@"thursday"];
        
    }else if (well == SHALLOW){
        [self setManHours:3];
        [self setDepthFeet:60];
        [self setCostPerFoot:2];
        [self setCostPerManHour:35];
        [self setInspection:@"monday"];
        
    }else if (well == ABANDON){
        [self setManHours:6];
        [self setDepthFeet:300];
        [self setCostPerFoot:5];
        [self setCostPerManHour:25];
        [self setInspection:@"wednesday"];
        
    }else{
        NSLog(@"No well service needed.");
    }
    int calcInvoice = self.manHours * self.costPerManHour + self.depthFeet * self.costPerFoot + self.permitFee;
    NSLog(@"Your invoice total is$%d", calcInvoice);
    return calcInvoice;
    
};


@end
