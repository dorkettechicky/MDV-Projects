//
//  ViewController.m
//  Project3
//
//  Created by Patti Dacosta on 4/23/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    //Call Functions
    //Add function call
    int result = [self add:30 addTo:10];
    
    //Append String Call
    NSString *stringAppend = [self append:@"Dog " secondString:@"treats"];
    [self displayAlertWithString:stringAppend alertHead:@"Append Alert"];
    
    NSNumber *intIntoNum = [NSNumber numberWithInt:result];
    NSString *numToString = [intIntoNum stringValue];
    NSString *totalIs = [self append:@"The number is " secondString:numToString];
    [self displayAlertWithString:totalIs alertHead:@"Add Function Result"];
    
    //Call compare function
    
    NSInteger dogTreats = 15;
    NSInteger catTreats = 18;
    BOOL compareTreats = [self compare:dogTreats compareTo:catTreats];
    
    if (compareTreats == YES) {
        NSString *compString = [NSString stringWithFormat:@"We have %d dog treats, and %d cat treats. Are they equal? %@.", dogTreats, catTreats, compareTreats? @"YES" : @"NO"];
        [self displayAlertWithString:compString alertHead:@"Compare Treats"];
        }else if
            (compareTreats == NO){
            NSString *compString = [NSString stringWithFormat:@"We have %d dog treats, and %d cat treats. Are they equal? %@.", dogTreats, catTreats, compareTreats? @"YES" : @"NO"];
            [self displayAlertWithString:compString alertHead:@"Compare Treats"];
    }

    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

//Create a function called Add. This function will take two NSInteger or int types and return the result of an addition between these two.

-(int)add:(NSInteger)numb1 addTo:(NSInteger)numb2
{
    return numb1 + numb2;
    
}
//Create a BOOL function called Compare that takes two NSInteger values. Return YES or NO based on whether the values are equal.

-(BOOL)compare:(NSInteger)num1 compareTo:(NSInteger)num2
{
    if(num1==num2){
        
    return YES;
        
    }else{
        
        return NO;
    }
}
//Create a function called Append. This function will take two NSStrings and return a new NSString containing the appended strings using an NSMutableString and the Append method.

-(NSString*) append:(NSString*)string1 secondString:(NSString*)string2
{
    NSMutableString *createString = [[NSMutableString alloc]initWithString:string1];
       [createString appendString:string2];
    return createString;
}

//Create a function called DisplayAlertWithString. This function will take as a parameter an NSString

-(void)displayAlertWithString:(NSString*)alertString alertHead:(NSString*)alertHead
{
    //Create a UIAlertView 
    UIAlertView *popAlert = [[UIAlertView alloc]initWithTitle:alertHead message:alertString delegate:nil cancelButtonTitle:@"Gotcha" otherButtonTitles:nil];
    if (popAlert != nil) {
        [popAlert show];
    }
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
