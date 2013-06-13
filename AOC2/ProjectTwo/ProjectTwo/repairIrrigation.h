//
//  repairIrrigation.h
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "baseIrrigation.h"

@interface repairIrrigation : baseIrrigation
{
    int repairType;
}

typedef enum{
    REPAIRPIPE,
    REPAIRVALVE,
    REPAIRPUMP,
    REPAIRHEADS
    
} repairType;


//Data members
@property int repairs;
@property NSString *serviceCall;
@property int costSvcCall;
@property int numberRepairs;
@property int costPerHead;




@end
