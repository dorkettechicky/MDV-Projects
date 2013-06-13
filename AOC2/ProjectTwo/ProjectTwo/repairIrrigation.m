//
//  repairIrrigation.m
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "repairIrrigation.h"

@implementation repairIrrigation

@synthesize repairs, serviceCall, costSvcCall,  numberRepairs;

//Customize init for repairs
-(id)init
{
    self = [super init];
    if (self !=nil)
    {
        // set defaults
        [self setManHours:2];
        [self setCostPerManHour:45];
        [self setServiceCall:@"repair pipe"];
        [self setNumberRepairs:4];
        
    }
    return self;
}


-(int)calcInvoice
{
    //set price for serviceCall
    if (repairs == REPAIRPIPE) {
        [self setManHours:2];
        [self setCostSvcCall:60];
        [self setCostPerManHour:45];
        [self setServiceCall:@"repair pipe"];
        
    }else if (repairs == REPAIRVALVE){
        [self setManHours:1];
        [self setCostSvcCall:60];
        [self setCostPerManHour:70];
        [self setServiceCall:@"repair valve"];
        
    }else if (repairs == REPAIRPUMP){
        [self setManHours:3];
        [self setCostSvcCall:60];
        [self setCostPerManHour:75];
        [self setServiceCall:@"repair pump"];
        
    }else if (repairs == REPAIRHEADS){
        [self setManHours:1];
        [self setCostPerManHour:15];
        [self setCostPerHead:20];
        [self setServiceCall:@"repair heads"];
        
    }else{
        NSLog(@"There were no repairs needed.");
    }
    int calcInvoice = self.manHours * self.costPerManHour + self.costSvcCall + self.costPerHead;
    
    NSLog(@"Your invoice total is $%d", calcInvoice);
    return calcInvoice;
    
};
@end
