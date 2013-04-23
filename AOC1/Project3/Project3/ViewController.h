//
//  ViewController.h
//  Project3
//
//  Created by Patti Dacosta on 4/23/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController

-(int)add:(NSInteger)numb1 addTo:(NSInteger)numb2;
-(BOOL)compare:(NSInteger)numb1 compareTo:(NSInteger)numb2;
-(NSString*) append:(NSString*)string1 secondString:(NSString*)string2;
-(void)displayAlertWithString:(NSString*)alertString alertHead:(NSString*)alertHead;
@end
