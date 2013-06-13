//
//  wellsIrrigation.h
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "baseIrrigation.h"

@interface wellsIrrigation : baseIrrigation
{
    int wellType;
}

typedef enum{
    SLEEVE,
    DEEP,
    SHALLOW,
    ABANDON
    
} wellType;

//Data members
@property int permitFee;
@property NSString *inspection;
@property int depthFeet;
@property int costPerFoot;
@property int well;


@end
