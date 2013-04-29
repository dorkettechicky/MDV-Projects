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
    
    //Create login button
    
    loginButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    if (loginButton != nil) {
        loginButton.tag = BUTTON_LOGIN;
        loginButton.frame=CGRectMake(210.0f, 55.0f, 90.0f, 30.0f);
        [loginButton setTitle:@"Login" forState:UIControlStateNormal];
        [loginButton addTarget:self action:@selector(onClick:) forControlEvents:UIControlEventTouchUpInside];
        [self.view addSubview:loginButton];
    }
    
    //Create label with default text
    
    loginState = [[UILabel alloc] initWithFrame:(CGRectMake(0.0f, 95.0f, 340.0f, 90.0f))];
    loginState.backgroundColor = [UIColor grayColor];
    if (loginState !=nil) {
        loginState.text = @"Please Enter Username:";
        loginState.textColor = [UIColor blueColor];
        loginState.textAlignment = NSTextAlignmentCenter;
        loginState.numberOfLines = 2;
        [self.view addSubview:loginState];
    }
    
    //Create date button
    
    dateButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    if (dateButton != nil) {
        dateButton.tag = BUTTON_DATE;
        dateButton.frame = CGRectMake(10.0f, 240.0f, 90.0f, 30.0f);
        [dateButton.setTitle:@"Show Date" forState:UIControlStateNormal];
        
    }
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
