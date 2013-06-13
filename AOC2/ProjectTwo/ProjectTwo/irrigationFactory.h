//
//  irrigationFactory.h
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "baseIrrigation.h"
#import "repairIrrigation.h"
#import "wellsIrrigation.h"
#import "newIrrigation.h"


@interface irrigationFactory : NSObject

+(baseIrrigation *)createNewTicket: (int)ticketType;

@end
