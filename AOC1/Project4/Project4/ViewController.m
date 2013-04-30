//
//  ViewController.m
//  Project4
//
//  Created by Patti Dacosta on 4/28/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "ViewController.h"

#define BUTTON_LOGIN 0
#define BUTTON_DATE 1
#define BUTTON_INFO 2

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    //Change background color
    self.view.backgroundColor = [UIColor colorWithRed:1 green:1 blue:1 alpha:1]; /*#ffffff*/
    
    //Label for text field
    UILabel *unLabel = [[UILabel alloc]initWithFrame:CGRectMake(10.0f, 10.0f, 100.0f, 30.0f)];
    
    if (unLabel != nil) {
        unLabel.text = @"Username:";
        [self.view addSubview:unLabel];
    }
    
    //Text field for Username
    usernameField = [[UITextField alloc] initWithFrame:CGRectMake(100.0f, 10.0f, 200.0f, 30.0f)];
    if (usernameField != nil) {
        usernameField.borderStyle = UITextBorderStyleRoundedRect;
        [self.view addSubview:usernameField];
    }
    
    //Create login button with action attached
    
    loginButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    if (loginButton != nil) {
        loginButton.tag = BUTTON_LOGIN;
        loginButton.frame=CGRectMake(210.0f, 55.0f, 90.0f, 30.0f);
        [loginButton setTitle:@"Login" forState:UIControlStateNormal];
        [loginButton addTarget:self action:@selector(onClick:) forControlEvents:UIControlEventTouchUpInside];
        [self.view addSubview:loginButton];
    }
    
    //Create label with default text
    
    loginState = [[UILabel alloc] initWithFrame:(CGRectMake(5.0f, 95.0f, 310.0f, 90.0f))];
    loginState.backgroundColor = [UIColor grayColor];
    if (loginState !=nil) {
        loginState.text = @"Please Enter Username:";
        loginState.textColor = [UIColor blueColor];
        loginState.textAlignment = NSTextAlignmentCenter;
        loginState.numberOfLines = 2;
        [self.view addSubview:loginState];
    }
    
    //Create date button with action attached
    
    dateButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    if (dateButton != nil) {
        dateButton.tag = BUTTON_DATE;
        dateButton.frame = CGRectMake(10.0f, 240.0f, 90.0f, 30.0f);
        [dateButton setTitle:@"Show Date" forState:UIControlStateNormal];
        [dateButton addTarget:self action:@selector(onClick:) forControlEvents:UIControlEventTouchUpInside];
        [self.view addSubview:dateButton];
    }
    
    //Get current date
    
    NSDate *date = [NSDate date];
    NSDateFormatter *dateFormat = [[NSDateFormatter alloc] init];
    if (dateFormat != nil) {
        [dateFormat setDateFormat:@"MMMM dd, yyyy K:mm a \n zzzz"];
        dateText = [dateFormat stringFromDate:date];
    }
    
    //Create more info button with action attached
    
    UIButton *infoButton =[UIButton buttonWithType:UIButtonTypeInfoDark];
    if (infoButton != nil) {
        infoButton.frame = CGRectMake(10.0f, 300.0f, 25.0f, 25.0f);
        infoButton.tag = BUTTON_INFO;
        [infoButton addTarget:self action:@selector(onClick:) forControlEvents:UIControlEventTouchUpInside];
        [self.view addSubview:infoButton];
    }
    
    //Create label with no initial text
    
    infoText = [[UILabel alloc] initWithFrame:(CGRectMake(10.0f, 335.0f, 340.0f, 60.0f))];
    if (infoText != nil) {
        infoText.textColor = [UIColor blueColor];
        infoText.numberOfLines = 2;
        [self.view addSubview:infoText];
        
    }
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}
//Add function onClick
-(void)onClick:(UIButton *)button
{
    switch (button.tag) {
        case BUTTON_LOGIN:{
            if (usernameField.text.length == 0) {
                loginState.text = @"Username cannot be empty";
            } else {
                loginState.text = [NSString stringWithFormat:(NSString *)@"User: %@ has been logged in",usernameField.text];
                [usernameField resignFirstResponder];
            }             }
            break;
        case BUTTON_DATE:{
            dateAlert = [[UIAlertView alloc]initWithTitle:@"Date:" message:dateText delegate:nil cancelButtonTitle:@"OK" otherButtonTitles:nil];
            if (dateAlert != nil) {
                [dateAlert show];
                
            }
        }
            break;
        case BUTTON_INFO:{
            infoText.text = @"This application was created by: Patti Dacosta";
        }
        default:
            break;
    }
    
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end