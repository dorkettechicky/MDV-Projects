//
//  ViewController.m
//  projectOne
//
//  Created by Patti Dacosta on 6/5/13.
//  Copyright (c) 2013 Patti Dacosta. All rights reserved.
//

#import "ViewController.h"
#import "irrigationFactory.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    //Set background color
    self.view.backgroundColor = [UIColor colorWithRed:1 green:0.937 blue:0.765 alpha:1]; /*#ffefc3*/
    
    //Label for title
    irrigationLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.0f, 10.0f, 310.0f, 30.0f)];
    
    if (irrigationLabel !=nil){
        irrigationLabel.backgroundColor = [UIColor colorWithRed:0.298 green:0.169 blue:0.184 alpha:1]; /*#4c2b2f*/
        irrigationLabel.text = @"Irrigation Pricing";
        irrigationLabel.textColor = [UIColor colorWithRed:1 green:0.937 blue:0.765 alpha:1]; /*#ffefc3*/
        irrigationLabel.textAlignment = NSTextAlignmentCenter;
        
        [self.view addSubview:irrigationLabel];
    }
    
    //Create new ticket for repair.
    repairIrrigation *newRepair = (repairIrrigation*) [irrigationFactory createNewTicket:REPAIRSYSTEM];
    [newRepair setRepairs:2];
    if (newRepair !=nil) {
        NSString *newRepairType = @"repair pump";
        NSString *repairIssueIs = [NSString stringWithFormat:@"pump is not turning on"];
        [newRepair setIssueIs:repairIssueIs];
        
        NSString *repairWorkDone = @"evaluate";
        [newRepair setWorkDone:repairWorkDone];
        
        NSLog(@"Mr. Jones states his %@ ",[newRepair issueIs]);
        NSLog(@"So we will %@", [newRepair workDone]);
        NSLog(@" and %@. ", newRepairType);
        
        //Calculate the repair
        [newRepair calcInvoice];
        
        //Create label for repair text.
        repairLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.00, 50.00, 310.00, 60.00)];
        if (repairLabel !=nil) {
            repairLabel.backgroundColor = [UIColor colorWithRed:0.298 green:0.169 blue:0.184 alpha:1]; /*#4c2b2f*/
            repairLabel.text = [NSString stringWithFormat:@"Mr. Jones's %@, so we will %@, and %@.", repairIssueIs, repairWorkDone, newRepairType];
            repairLabel.textColor = [UIColor colorWithRed:1 green:0.937 blue:0.765 alpha:1]; /*#ffefc3*/
            repairLabel.textAlignment = NSTextAlignmentCenter;
            repairLabel.numberOfLines = 3;
            
            [self.view addSubview:repairLabel];
        }
        NSLog(@"repair total is %i", [newRepair invoiceTotal]);
        //Repair specifics
        repairSpecificsLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.00, 112.00, 310.00, 60.00)];
        if (repairSpecificsLabel !=nil) {
            repairSpecificsLabel.backgroundColor = [UIColor colorWithRed:0.298 green:0.169 blue:0.184 alpha:1]; /*#4c2b2f*/
            repairSpecificsLabel.text = [NSString stringWithFormat:@"Request to %@ is completed. Your invoice total is: $%i.", newRepairType, [newRepair invoiceTotal]];
            repairSpecificsLabel.textColor = [UIColor colorWithRed:1 green:0.937 blue:0.765 alpha:1]; /*#ffefc3*/
            repairSpecificsLabel.textAlignment = NSTextAlignmentCenter;
            repairSpecificsLabel.numberOfLines = 3;
            
            [self.view addSubview:repairSpecificsLabel];
        }
    }
    
    //Create new ticket for a new system.
    
    newIrrigation *newWater = (newIrrigation*) [irrigationFactory createNewTicket:NEWSYSTEM];
    [newWater setWater:1];
    if (newWater !=nil) {
        NSString *newWaterType = @"deep well";
        NSString *waterIssueIs = [NSString stringWithFormat:@"hates watering by hand"];
        [newWater setIssueIs:waterIssueIs];
        
        NSString *waterWorkDone = @"Install irrigation";
        [newWater setWorkDone:waterWorkDone];
        
        NSLog(@"Mrs. Smith is %@ ",[newWater issueIs]);
        NSLog(@"So we will %@", [newWater workDone]);
        NSLog(@"Customer already has a %@. ", newWaterType);
        
        //Calculate new system
        [newWater calcInvoice];
        
        //Create label for new system text.
        newSystemLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.00, 182.00, 310.00, 60.00)];
        if (newSystemLabel !=nil) {
            newSystemLabel.backgroundColor = [UIColor colorWithRed:0.298 green:0.169 blue:0.184 alpha:1]; /*#4c2b2f*/
            newSystemLabel.text = [NSString stringWithFormat:@"Mrs. Smith %@. %@ to existing %@.", waterIssueIs, waterWorkDone, newWaterType];
            newSystemLabel.textColor = [UIColor colorWithRed:1 green:0.937 blue:0.765 alpha:1]; /*#ffefc3*/
            newSystemLabel.textAlignment = NSTextAlignmentCenter;
            newSystemLabel.numberOfLines = 3;
            
            [self.view addSubview:newSystemLabel];
        }
        NSLog(@"repair total is %i", [newWater invoiceTotal]);
        
        //New System specifics
        newSystemSpecificsLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.00, 244.00, 310.00, 60.00)];
        if (newSystemSpecificsLabel !=nil) {
            newSystemSpecificsLabel.backgroundColor = [UIColor colorWithRed:0.298 green:0.169 blue:0.184 alpha:1]; /*#4c2b2f*/
            newSystemSpecificsLabel.text = [NSString stringWithFormat:@"Irrigation installed to %@. Your invoice total is: $%i.", newWaterType, [newWater invoiceTotal]];
            newSystemSpecificsLabel.textColor = [UIColor colorWithRed:1 green:0.937 blue:0.765 alpha:1]; /*#ffefc3*/
            newSystemSpecificsLabel.textAlignment = NSTextAlignmentCenter;
            newSystemSpecificsLabel.numberOfLines = 3;
            
            [self.view addSubview:newSystemSpecificsLabel];
        }
    }
    
    //Create new ticket for well service.
    
    wellsIrrigation *newWell = (wellsIrrigation*) [irrigationFactory createNewTicket:WELLS];
    [newWell setWell:0];
    if (newWell !=nil) {
        NSString *newWellType = @"sleeve";
        NSString *wellIssueIs = [NSString stringWithFormat:@"under ground leak"];
        [newWell setIssueIs:wellIssueIs];
        
        NSString *wellWorkDone = @"push new pipe ";
        [newWell setWorkDone:wellWorkDone];
        
        NSLog(@"Pig Pen BBQ has a %@ ",[newWell issueIs]);
        NSLog(@"We will %@ into the well.", [newWell workDone]);
        NSLog(@"The %@ should repair the leak.", newWellType);
        
        
        //Calculate well service
        [newWell calcInvoice];
        
        //Create label for well service text.
        wellsLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.00, 314.00, 310.00, 60.00)];
        if (wellsLabel !=nil) {
            wellsLabel.backgroundColor = [UIColor colorWithRed:0.298 green:0.169 blue:0.184 alpha:1]; /*#4c2b2f*/
            wellsLabel.text = [NSString stringWithFormat:@"Pig Pen BBQ has an %@. We will %@ into the well. The %@ should repair the leak.", wellIssueIs, wellWorkDone, newWellType];
            wellsLabel.textColor = [UIColor colorWithRed:1 green:0.937 blue:0.765 alpha:1]; /*#ffefc3*/
            wellsLabel.textAlignment = NSTextAlignmentCenter;
            wellsLabel.numberOfLines = 3;
            
            [self.view addSubview:wellsLabel];
        }
        NSLog(@"repair total is %i", [newWater invoiceTotal]);
        
        //Well service specifics
        wellsSpecificsLabel = [[UILabel alloc] initWithFrame:CGRectMake(5.00, 376.00, 310.00, 60.00)];
        if (wellsSpecificsLabel !=nil) {
            wellsSpecificsLabel.backgroundColor = [UIColor colorWithRed:0.298 green:0.169 blue:0.184 alpha:1]; /*#4c2b2f*/
            wellsSpecificsLabel.text = [NSString stringWithFormat:@"We have put a %@ in your well. Inspection is on %@. Invoice total is: $%i.", newWellType, newWell.inspection,[newWell invoiceTotal]];
            wellsSpecificsLabel.textColor = [UIColor colorWithRed:1 green:0.937 blue:0.765 alpha:1]; /*#ffefc3*/
            wellsSpecificsLabel.textAlignment = NSTextAlignmentCenter;
            wellsSpecificsLabel.numberOfLines = 3;
            
            [self.view addSubview:wellsSpecificsLabel];
        }
        
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
