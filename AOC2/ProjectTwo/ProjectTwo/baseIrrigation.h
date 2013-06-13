//
//  baseIrrigation.h
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface baseIrrigation : NSObject

{
    int irrigationEnum;
}

typedef enum{
    NEWSYSTEM,
    REPAIRSYSTEM,
    WELLS
    
}irrigationEnum;

//Data shared by all appointment types

//How many manHours for the appointment
@property int manHours;

//How much does each manHour cost
@property int costPerManHour;

//What is the invoice total

@property int invoiceTotal;

//What is the reason for the appointment

@property NSString *issueIs;

//What work was done

@property NSString *workDone;

//Method - Initialize
-(id)init;

//Calculate invoice
-(int)calcInvoice;


@end
