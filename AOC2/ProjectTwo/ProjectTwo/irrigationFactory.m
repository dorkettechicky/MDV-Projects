//
//  irrigationFactory.m
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "irrigationFactory.h"

@implementation irrigationFactory

+(baseIrrigation *)createNewTicket: (int)ticketType
{
    //If ticket type is for a new system
    if (ticketType == NEWSYSTEM) {
        return [[newIrrigation alloc] init];
        
        //If ticket type is for a well
    }else if (ticketType == WELLS){
        return [[wellsIrrigation alloc] init];
        
        //If ticket type is to repair a system
    }else if (ticketType == REPAIRSYSTEM){
        return [[repairIrrigation alloc] init];
        
    }else{
        return nil;
    }
}
@end
