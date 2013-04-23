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
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

//Create a function called Add. This function will take two NSInteger or int types and return the result of an addition between these two.

-(int)add:(NSInteger)numb1 addTo:(NSInteger)numb2
{
    return numb1 + numb2;
    
}
//Create a BOOL function called Compare that takes two NSInteger values. Return YES or NO based on whether the values are equal.

-(BOOL)compare:(NSInteger)numb1 compareTo:(NSInteger)numb2
{
    if(numb1==numb2){
        
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
