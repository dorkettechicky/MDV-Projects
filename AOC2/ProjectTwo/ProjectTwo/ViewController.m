//
//  ViewController.m
//  ProjectTwo
//
//  Created by Patti Dacosta on 6/7/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "ViewController.h"
#import "irrigationFactory.h"
#import "baseIrrigation.h"
#import "InfoViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(IBAction)infoView:(id)sender{
    InfoViewController *infoBtn = [[InfoViewController alloc]initWithNibName:@"InfoView" bundle:nil];
    if (infoBtn !=nil) {
        [self presentViewController:infoBtn animated:TRUE completion:nil];
    }
}
-(IBAction)onClick:(id)sender;
{
    UIButton *button = (UIButton*)sender;
    
    if (button !=nil) {
        if (button.tag == 0) {
            headsBtn.enabled = false;
            zonesBtn.enabled = true;
            wellsBtn.enabled = true;
            stepperBtn.value = 1;
            estimateText.text = [NSString stringWithFormat:@"Heads to repair"];
            estimateText.textAlignment = NSTextAlignmentLeft;
        }else if (button.tag == 1){
            headsBtn.enabled = true;
            zonesBtn.enabled = false;
            wellsBtn.enabled = true;
            stepperBtn.value = 1;
            estimateText.text = [NSString stringWithFormat:@"Zones to be added"];
            estimateText.textAlignment = NSTextAlignmentLeft;
            
        }else if (button.tag == 2){
            headsBtn.enabled = true;
            zonesBtn.enabled = true;
            wellsBtn.enabled = false;
            stepperBtn.value = 1;
            estimateText.text = [NSString stringWithFormat:@"Hours to service well"];
            estimateText.textAlignment = NSTextAlignmentLeft;
        }
    }
}

//Text field display based on user incrementing stepper control.

-(IBAction)stepIncrement:(id)sender
{
    int stepped = stepperBtn.value;
    
    if (headsBtn.enabled == false) {
        estimateText.text = [NSString stringWithFormat:@"There are %d heads that need repair", stepped];
        
    }else if (zonesBtn.enabled == false) {
        estimateText.text = [NSString stringWithFormat:@"There are %d zones that need to be added", stepped];
    }else if (wellsBtn.enabled == false) {
        estimateText.text = [NSString stringWithFormat:@"We will need %d hours to repair the well", stepped];
    }
}

//Perform calculations based on which sub-class is in focus.

-(IBAction)calcOnClick:(id)sender{
    
    int stepIncrement = stepperBtn.value;
    
    //Calculation for head repairs
    
    if (headsBtn.enabled == false) {
        repairIrrigation *newRepair = (repairIrrigation*)[irrigationFactory createNewTicket:REPAIRSYSTEM];
        
        [newRepair setRepairs:3];
        int total = newRepair.calcInvoice * stepIncrement;
        
        //Use if else to make sure language is correct based for single or multiple increments.
        if (stepperBtn.value >1) {
            estimateText.text = [NSString stringWithFormat:@"To repair %d heads will cost $%d", stepIncrement, total];
        }else{
            estimateText.text = [NSString stringWithFormat:@"To repair %d head will cost $%d", stepIncrement, total];
        }
    }

    //Calculation for zone installation
    if (zonesBtn.enabled == false) {
        newIrrigation *newWater = (newIrrigation*)[irrigationFactory createNewTicket:NEWSYSTEM];
        [newWater setWater:0];
        int total = newWater.calcInvoice * stepIncrement;
        
        //Use if else to make sure language is correct based for single or multiple increments.
        if (stepperBtn.value >1) {
            estimateText.text = [NSString stringWithFormat:@"To install %d zones will cost $%d", stepIncrement, total];
        }else{
            estimateText.text = [NSString stringWithFormat:@"To install %d zone will cost $%d", stepIncrement, total];
        }
    }
    //Calculation for well repair
    if (wellsBtn.enabled == false) {
        wellsIrrigation *newWell = (wellsIrrigation*)[irrigationFactory createNewTicket:WELLS];
        [newWell setWell:0];
        int total = newWell.calcInvoice * stepIncrement;
        
        //Use if else to make sure language is correct based for single or multiple increments.
        if (stepperBtn.value >1) {
            estimateText.text = [NSString stringWithFormat:@"%d hours of well service will cost $%d", stepIncrement, total];
        }else{
            estimateText.text = [NSString stringWithFormat:@"%d hour of well service will cost $%d", stepIncrement, total];
        }
    }

}

//Code for segmented control to change background color

-(IBAction)bgColorSwitch:(id)sender{
    UISegmentedControl *setColor = (UISegmentedControl*)sender;
    
    if (setColor !=nil) {
        if (setColor.selectedSegmentIndex == 0) {
            self.view.backgroundColor = [UIColor colorWithRed:0.6 green:1 blue:0.8 alpha:1]; /*#99ffcc*/
        }else if (setColor.selectedSegmentIndex == 1){
            self.view.backgroundColor = [UIColor colorWithRed:0.804 green:0.725 blue:0.647 alpha:1]; /*#cdb9a5*/
        }else if (setColor.selectedSegmentIndex == 2){
            self.view.backgroundColor = [UIColor colorWithRed:1 green:1 blue:0.729 alpha:1]; /*#ffffba*/
        }else if (setColor.selectedSegmentIndex == 3){
            self.view.backgroundColor = [UIColor colorWithRed:0.682 green:0.902 blue:0.949 alpha:1]; /*#aee6f2*/
        }
    }
}

@end
