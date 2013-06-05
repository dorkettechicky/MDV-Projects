//
//  repairIrrigation.m
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "repairIrrigation.h"

@implementation repairIrrigation

@synthesize serviceCall, costSvcCall, repairPrice, numberRepairs;

//Customize init for repairs
-(id)init
{
    self = [super init];
    if (self !=nil)
    {
        // set defaults
        [self setManHours:2];
        [self setServiceCall:@"repair pipe"];
        [self setNumberRepairs:4];
                
    }
    return self;
}

//Override calculation method
-(void)calcInvoice
{
    //set price for serviceCall
    if (serviceCallType == REPAIRPIPE) {
        [self setManHours:2];
        [self setCostSvcCall:60];
        [self setServiceCall:@"repair pipe"];
        [self setRepairPrice:(self.manHours * 55 + self.costSvcCall)];
    }else if (serviceCallType == REPAIRVALVE){
        [self setManHours:1];
        [self setCostSvcCall:60];
        [self setServiceCall:@"repair valve"];
        [self setRepairPrice:(self.manHours * 70 + self.costSvcCall)];
    }else if (serviceCallType == REPAIRPUMP){
        [self setManHours:3];
        [self setCostSvcCall:60];
        [self setServiceCall:@"repair pump"];
        [self setRepairPrice:(self.manHours * 75 + self.costSvcCall)];
    }else if (serviceCallType == REPAIRHEADS){
        [self setManHours:0];
        [self setCostSvcCall:60];
        [self setServiceCall:@"repair heads"];
        [self setRepairPrice:(self.manHours * 45 + self.costSvcCall)];
    }else{
        NSLog(@"There were no repairs needed.");
    }
    
   
}
@end
