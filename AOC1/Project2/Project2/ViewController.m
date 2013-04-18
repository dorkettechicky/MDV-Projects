//
//  ViewController.m
//  Project2
//
//  Created by Patti Dacosta on 4/14/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    //Begin Assignment Code
    
    //Change background color
    self.view.backgroundColor = [UIColor colorWithRed:0.22 green:0.22 blue:0.22 alpha:1]; /*#383838*/
    
    //Book Title with if check, background in 1 color text in another centered.
    bookTitle = [[UILabel alloc] initWithFrame:CGRectMake(5.0f, 0.0f, 310.0f, 35.0f)];
    
    if (bookTitle !=nil){
        bookTitle.backgroundColor = [UIColor colorWithRed:0.298 green:0.169 blue:0.184 alpha:1]; /*#4c2b2f*/
        bookTitle.text = @"Split Infinity:";
        bookTitle.textColor = [UIColor colorWithRed:1 green:0.937 blue:0.765 alpha:1]; /*#ffefc3*/
        bookTitle.textAlignment = NSTextAlignmentCenter;
    }
    [self.view addSubview:bookTitle];
    
    //Author Label with if check, background & text in different colors, text align right.
    authorLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.0f, 40.0f, 120.0f, 35.0f)];
    
    if (authorLabel !=nil){
        authorLabel.backgroundColor = [UIColor colorWithRed:0.898 green:0.443 blue:0.322 alpha:1]; /*#e57152*/
        authorLabel.text = @"Author:";
        authorLabel.textColor = [UIColor colorWithRed:0.91 green:0.871 blue:0.404 alpha:1]; /*#e8de67*/
        authorLabel.textAlignment = NSTextAlignmentRight;
    }
    [self.view addSubview:authorLabel];
    
    //Author Name with if check, background & text in different colors, text align left.
    authorName = [[UILabel alloc] initWithFrame:CGRectMake(125.0f, 40.0f, 190.0f, 35.0f)];
    
    if (authorName !=nil){
        authorName.backgroundColor = [UIColor colorWithRed:0.302 green:0.545 blue:0.302 alpha:1]; /*#4d8b4d*/
        authorName.text = @"Piers Anthony";
        authorName.textColor = [UIColor colorWithRed:0.294 green:0.224 blue:0.161 alpha:1]; /*#4b3929*/
        authorName.textAlignment = NSTextAlignmentLeft;
    }
    [self.view addSubview:authorName];
    
    //Published Label with if check, background & text in different colors, text align right.
    publishedLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.0f, 80.0f, 120.0f, 35.0f)];
    
    if (publishedLabel !=nil){
        publishedLabel.backgroundColor = [UIColor colorWithRed:0.298 green:0.439 blue:0.416 alpha:1]; /*#4c706a*/
        publishedLabel.text = @"Published:";
        publishedLabel.textColor = [UIColor colorWithRed:0.529 green:0.196 blue:0.173 alpha:1]; /*#87322c*/
        publishedLabel.textAlignment = NSTextAlignmentRight;
    }
    [self.view addSubview:publishedLabel];
    
    //Published Date with if check, background & text in different colors, text align left.
    publishedDate = [[UILabel alloc] initWithFrame:CGRectMake(125.0f, 80.0f, 190.0f, 35.0f)];
    
    if (publishedDate !=nil){
        publishedDate.backgroundColor = [UIColor colorWithRed:0.49 green:0.612 blue:0.514 alpha:1]; /*#7d9c83*/
        publishedDate.text = @"April 1980";
        publishedDate.textColor = [UIColor colorWithRed:0.749 green:0.51 blue:0.42 alpha:1]; /*#bf826b*/
        publishedDate.textAlignment = NSTextAlignmentLeft;
    }
    [self.view addSubview:publishedDate];
    
    //Summary Label with if check, background & text in different colors, text align left.
    summaryLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.0f, 120.0f, 115.0f, 35.0f)];
    
    if (summaryLabel !=nil){
        summaryLabel.backgroundColor = [UIColor colorWithRed:0.039 green:0.294 blue:0.49 alpha:1]; /*#0a4b7d*/
        summaryLabel.text = @"Summary:";
        summaryLabel.textColor = [UIColor colorWithRed:0.678 green:0.169 blue:0.596 alpha:1]; /*#ad2b98*/
        summaryLabel.textAlignment = NSTextAlignmentLeft;
    }
    [self.view addSubview:summaryLabel];
    
    //Summary Text with if check, background & text in different colors, text align center.
    summaryText = [[UILabel alloc] initWithFrame:CGRectMake(5.0f, 160.0f, 310.0f, 165.0f)];
    
    if (summaryText !=nil){
        summaryText.backgroundColor = [UIColor colorWithRed:0 green:0 blue:0 alpha:1]; /*#000000*/
        summaryText.text = @"Stile discovers his planet has 2 parallel worlds, Proton which operates on science, and Phaze which operates on magic. Someone is trying to kill him in both worlds and he must master magic to save both Proton and Phaze from destruction.";
        summaryText.textColor = [UIColor colorWithRed:1 green:1 blue:1 alpha:1]; /*#ffffff*/
        summaryText.textAlignment = NSTextAlignmentCenter;
        summaryText.numberOfLines = 7;
    }
    [self.view addSubview:summaryText];
    
    //List of Items Label with if check, background & text in different colors, text align left.
    listLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.0f, 330.0f, 115.0f, 35.0f)];
    
    if (listLabel !=nil){
        listLabel.backgroundColor = [UIColor colorWithRed:0.451 green:0.114 blue:0.631 alpha:1]; /*#731da1*/
        listLabel.text = @"List of Items:";
        listLabel.textColor = [UIColor colorWithRed:1 green:0.569 blue:0.459 alpha:1]; /*#ff9175*/
        listLabel.textAlignment = NSTextAlignmentLeft;
    }
    [self.view addSubview:listLabel];
    
    //Array of Book Items
    NSArray *itemsArray = [[NSArray alloc]initWithObjects:@"Book of Magic", @"Game Computer", @"Citizen", @"Serf", @"Unicorn", nil];
    
    
    //Mutable string made from array
    NSMutableString *listedItems = [[NSMutableString alloc] init];
    
    //Loop through the array, add to listedItems, and place ',' or 'and' in proper place.
    for (int i=0; i<[itemsArray count]; i++){
        [listedItems appendString:[itemsArray objectAtIndex:i]];
        
        if (i==([itemsArray count]-1)) {
            [listedItems appendFormat:@""];
            
        }else if (i== ([itemsArray count]-2)) {
            [listedItems appendFormat:@", and "];
        }else{
            [listedItems appendFormat:@", "];
        }
    }
    
    //List of items with if check, background & text in different colors, text align center.
    listItems = [[UILabel alloc] initWithFrame:CGRectMake(5.0f, 370.0f, 310.0f, 60.0f)];
    
    if (listItems !=nil){
        listItems.backgroundColor = [UIColor colorWithRed:0.353 green:0.741 blue:0.353 alpha:1]; /*#5abd5a*/
        listItems.text = listedItems;
        listItems.textColor = [UIColor colorWithRed:0.31 green:0.239 blue:0.149 alpha:1]; /*#4f3d26*/
        listItems.textAlignment = NSTextAlignmentCenter;
        listItems.numberOfLines = 2;
    }
    [self.view addSubview:listItems];
    
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
