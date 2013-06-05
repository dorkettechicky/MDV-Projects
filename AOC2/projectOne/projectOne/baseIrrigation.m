//
//  baseIrrigation.m
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "baseIrrigation.h"

@implementation baseIrrigation

//Create get & set methods for properties
@synthesize invoiceTotal, manHours,costPerManHour, issueIs, workDone;

//Initialize baseIrrigation, create instance, set manHours to 0.
-(id)init
{
    self = [super init];
    if (self !=nil)
    {
        [self setInvoiceTotal:0];
        [self setManHours:0];
        [self setCostPerManHour:45];
        [self setIssueIs:nil];
        [self setWorkDone:nil];
    }
    return self;
}

//Calculate invoice
-(void)calcInvoice
{
    //No current calculation, statement to log current value
    NSLog(@"The invoice total is %i dollars", invoiceTotal);
}

@end
