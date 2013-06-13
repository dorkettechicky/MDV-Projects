//
//  ViewController.h
//  ProjectTwo
//
//  Created by Patti Dacosta on 6/7/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController

//Declare UI Elements
{
    IBOutlet UITextField *estimateText;
    IBOutlet UIStepper *stepperBtn;
    IBOutlet UIButton *headsBtn;
    IBOutlet UIButton *zonesBtn;
    IBOutlet UIButton *wellsBtn;
    IBOutlet UIButton *calcBtn;
    
}

//Declare IBActions

//Declare onClick which will handle multi buttons
-(IBAction)onClick:(id)sender;

//Declare bgColorSwitch
-(IBAction)bgColorSwitch:(id)sender;

//Declare stepIncrement
-(IBAction)stepIncrement:(id)sender;

//Declare calcOnClick
-(IBAction)calcOnClick:(id)sender;

//Delcare infoView control
-(IBAction)infoView:(id)sender;




@end
