//
//  newIrrigation.h
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "baseIrrigation.h"

@interface newIrrigation : baseIrrigation
{
    int waterType;
}

typedef enum{
    CITY,
    DEEPWELL,
    SHALLOWWELL,
    RECLAIM
    
} waterType;


//Data members
@property int numberZones;
@property NSString *typeTimer;
@property int water;
@property int costPerZone;

@end
