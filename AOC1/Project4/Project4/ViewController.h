//
//  ViewController.h
//  Project4
//
//  Created by Patti Dacosta on 4/28/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import <UIKit/UIKit.h>


@interface ViewController : UIViewController
{
    UITextField *usernameField;
    UIButton *loginButton;
    UILabel *loginState;
    UIButton *dateButton;
    UIButton *infoButton;
    NSString *dateText;
    UILabel *infoText;
    UIAlertView *dateAlert;

}

-(void)onClick:(UIButton *)button;
@end
