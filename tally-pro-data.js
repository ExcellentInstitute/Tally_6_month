// tally-pro-data.js
// Excellent Institute - Advanced Tally Prime 7.0 & 6-Month Professional Accounting Course

const tallyProBookData = [
    // ==========================================
    // MODULE 1: INTRODUCTION TO ACCOUNTING (MONTH 1)
    // ==========================================
    {
        id: "chapter1",
        title: "Module 1: Introduction to Accounting",
        topics: [
            {
                heading: "Fundamental Principles of Accounting",
                text: `Accounting is the universal language of business. It is the systematic process of recording, summarizing, analyzing, and reporting financial transactions.<br><br>
                <strong>Key Principles:</strong><br>
                1. <strong>Business Entity Concept:</strong> The owner and the business are two completely separate entities. If the owner takes cash for personal use, it is recorded as 'Drawings'.<br>
                2. <strong>Going Concern:</strong> We assume the business will run forever. This is why we record long-term assets (like land) at their original cost.<br>
                3. <strong>Accrual Concept:</strong> Incomes and expenses are recorded when they occur, not when the cash is actually exchanged.<br>
                4. <strong>Dual Aspect (The Accounting Equation):</strong> Assets = Liabilities + Owner's Equity (Capital).
                
                <div style="background-color: #f0fdfa; padding: 12px; border-left: 5px solid #0d9488; border-radius: 6px; margin-top: 20px;">
                    <strong style="color: #0f766e; font-size: 1.1rem;">🎯 MONTH 1 TARGET:</strong> Master manual accounting concepts, rules of debit/credit, and become completely fluent in navigating the Tally Prime 7.0 interface.
                </div>
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 10px;">
                    <strong style="color: #b45309;">🛠️ Day 1-3 Practical:</strong> Memorize the 4 key principles. Write down 10 real-world business scenarios and identify the dual aspect (what comes in vs what goes out) for each.
                </div>`,
                shortcut: "Accounting's ultimate goal is twofold: Ascertaining Profit/Loss (via P&L) and showing Financial Position (via Balance Sheet).",
                imgSrc: "images/tpro-01-principles.jpg"
            },
            {
                heading: "Types of Accounts (The Golden Rules)",
                text: `To record any transaction accurately, you MUST memorize the Three Golden Rules of Accounting. Every account falls into one of three categories:<br><br>
                <strong>1. Real Account (Assets & Properties):</strong> Tangible things like Cash, Furniture, Computers, and Land.<br>
                👉 <em>Rule: Debit what comes in, Credit what goes out.</em><br><br>
                <strong>2. Personal Account (People & Companies):</strong> Names of individuals, bank accounts, suppliers, and customers.<br>
                👉 <em>Rule: Debit the receiver, Credit the giver.</em><br><br>
                <strong>3. Nominal Account (Expenses & Incomes):</strong> Things that represent money spent or earned, like Rent, Salary, Sales, and Commission.<br>
                👉 <em>Rule: Debit all expenses and losses, Credit all incomes and gains.</em>
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 4-6 Practical:</strong> The instructor will provide a list of 50 account names (e.g., SBI Bank, Machinery, Wages, Rahul Traders). Classify each perfectly into Real, Personal, or Nominal.
                </div>`,
                shortcut: "Memorizing the Golden Rules is the absolute foundation of passing any accounting interview.",
                imgSrc: "images/tpro-02-golden-rules.jpg"
            },
            {
                heading: "Double Entry System & Journal Entries",
                text: `The Double Entry System means every transaction has two opposite effects: a Debit (Dr) and a Credit (Cr). They must always equal the same amount.<br><br>
                <strong>Example 1 (Starting Business):</strong> You start a business with ₹1,00,000 Cash.<br>
                - Cash Account (Real A/c) comes in 👉 Dr. 1,00,000<br>
                - Capital Account (Personal A/c) gives 👉 Cr. 1,00,000<br><br>
                <strong>Example 2 (Paying Rent):</strong> You pay ₹5,000 Rent in Cash.<br>
                - Rent Account (Nominal A/c) is an expense 👉 Dr. 5,000<br>
                - Cash Account (Real A/c) goes out 👉 Cr. 5,000
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 7-10 Practical:</strong> Using pen and paper, draft 25 manual journal entries based on a dummy business's first month of operations. Calculate the final Dr and Cr totals.
                </div>`,
                shortcut: "Journal entries are recorded chronologically (day-by-day) in the primary books of accounts.",
                imgSrc: "images/tpro-03-double-entry.jpg"
            },
            {
                heading: "Ledger Posting, Trial Balance and Final Accounts",
                text: `<strong>1. Ledger Posting:</strong> Transferring journal entries to individual account diaries to see specific balances.<br>
                <strong>2. Trial Balance:</strong> A summary sheet listing the closing balances of all ledgers to check if Debits equal Credits.<br>
                <strong>3. Final Accounts:</strong> Prepared at year-end. Includes:<br>
                - <em>Trading A/c:</em> Shows Gross Profit.<br>
                - <em>Profit & Loss A/c:</em> Shows Net Profit.<br>
                - <em>Balance Sheet:</em> A snapshot of Assets and Liabilities.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 11-12 Practical:</strong> Take the 25 journal entries from the previous practical and manually post them into 'T-shaped' ledger accounts on paper. Extract a manual Trial Balance.
                </div>`,
                shortcut: "In Tally Prime, you only do Voucher Entries. Tally instantly builds the Ledgers, Trial Balance, and Final Accounts automatically!",
                imgSrc: "images/tpro-04-final-accounts.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 2: BASICS OF TALLY PRIME 7.0 (MONTH 1 CONT.)
    // ==========================================
    {
        id: "chapter2",
        title: "Module 2: Basics of Tally Prime",
        topics: [
            {
                heading: "Overview & Installation",
                text: `Tally ERP 9 was the older, blue-screen standard. Tally Prime 7.0 is the modern, color-optimized successor. It introduces a much cleaner interface, the powerful 'Go To' search bar, and seamless multitasking. Under the hood, Prime 7.0 manages GST compliance, e-Invoicing, and audit trails automatically.<br><br>
                <strong>Installation:</strong> Download Tally Prime from tallysolutions.com. Install it and select <strong>'Continue in Educational Mode'</strong>.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 13-14 Practical:</strong> Independently download and install Tally Prime 7.0 on your lab computer. Identify the Top Menu Bar vs the Gateway of Tally.
                </div>`,
                shortcut: "Tally Prime is designed to be fully operated using a keyboard. Using a mouse slows down a professional accountant.",
                imgSrc: "images/tpro-05-overview.jpg"
            },
            {
                heading: "Creating, Altering, Deleting Company",
                text: `Press <strong>Alt+K</strong> (Company Menu) and select <strong>Create</strong>. Enter the Company Name, Mailing Address, and State. <em>(Selecting the correct state is vital for accurate GST calculations)</em>.<br><br>
                <strong>Altering:</strong> Press Alt+K > Alter to fix spelling mistakes.<br>
                <strong>Deleting:</strong> Go to the Alter screen and press <strong>Alt+D</strong>. A warning will appear. Press 'Y' to permanently destroy the company.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 15-18 Practical:</strong> Create 5 dummy companies for different states. Alter the address for 2 of them. Permanently delete 3 of them.
                </div>`,
                shortcut: "Alt + D is the universal 'Delete' command in Tally for companies, ledgers, and vouchers.",
                imgSrc: "images/tpro-07-company.jpg"
            },
            {
                heading: "Navigation and Keyboard Shortcuts",
                text: `Master these Tally Prime shortcuts to work like a professional:<br>
                - <strong>Alt + G (Go To):</strong> The magic search bar. Jump to any report without closing your current work.<br>
                - <strong>Ctrl + A:</strong> Instantly accept and save any screen.<br>
                - <strong>F12 (Configure):</strong> Opens hidden settings on your current screen.<br>
                - <strong>Esc (Escape):</strong> Back out of any menu to return to the Gateway.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 19-25 Practical (End of Month 1):</strong> Navigate completely without a mouse for 2 days. Use Alt+G to open the Balance sheet, then immediately press Alt+G again to open the Day Book without closing the Balance Sheet.
                </div>`,
                shortcut: "If you cannot find a specific option on a screen, press F12! It is likely hidden in the configuration menu.",
                imgSrc: "images/tpro-09-shortcuts.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 3: LEDGER MANAGEMENT (MONTH 2)
    // ==========================================
    {
        id: "chapter3",
        title: "Module 3: Ledger & Group Management",
        topics: [
            {
                heading: "Company Configuration Options (F11)",
                text: `As soon as you create a company, the F11 Features screen appears. Here you define the business operations.<br>
                - <strong>Accounting:</strong> Set 'Maintain Accounts' to Yes.<br>
                - <strong>Inventory:</strong> Set 'Maintain Inventory' to Yes.<br>
                - <strong>Taxation:</strong> Enable GST, TDS, or TCS if applicable.
                
                <div style="background-color: #f0fdfa; padding: 12px; border-left: 5px solid #0d9488; border-radius: 6px; margin-top: 20px;">
                    <strong style="color: #0f766e; font-size: 1.1rem;">🎯 MONTH 2 TARGET:</strong> Independently build a flawless accounting foundation by mastering Group Hierarchies and high-speed Voucher entries.
                </div>
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 10px;">
                    <strong style="color: #b45309;">🛠️ Day 26-28 Practical:</strong> Create a new company 'Month 2 Traders'. Open F11 and strictly enable only Accounting and Inventory features. Leave Taxation off for now.
                </div>`,
                shortcut: "You can press F11 from the Gateway of Tally at any point to turn these features on or off.",
                imgSrc: "images/tpro-10-f11.jpg"
            },
            {
                heading: "Understanding Group Hierarchy",
                text: `Tally operates on a strict Group Hierarchy. Placing a ledger in the wrong group will completely ruin the Balance Sheet.<br>
                <strong>Key Groups:</strong><br>
                - <em>Sundry Debtors:</em> Customers you sell to (Current Assets).<br>
                - <em>Sundry Creditors:</em> Suppliers you buy from (Current Liabilities).<br>
                - <em>Fixed Assets:</em> Computers, Land, Furniture owned by the business.<br>
                - <em>Indirect Expenses:</em> Office Rent, Staff Salary, Electricity Bill.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 29-33 Practical:</strong> Review the default Chart of Accounts. Create 5 Custom Sub-groups (e.g., 'North India Debtors' under Sundry Debtors).
                </div>`,
                shortcut: "Gateway of Tally > Chart of Accounts > Groups (To view the entire tree structure).",
                imgSrc: "images/tpro-11-groups.jpg"
            },
            {
                heading: "Creating Ledgers & Opening Balances",
                text: `Go to <strong>Gateway of Tally > Create > Ledger</strong>.<br>
                Create 'Sales A/c', 'Purchase A/c', and 'SBI Bank'.<br><br>
                <strong>Opening Balances:</strong> If you are switching an existing business to Tally, enter their current financial position as 'Opening Balances'. Ensure Tally marks Assets as 'Dr' and Liabilities as 'Cr'.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 34-37 Practical:</strong> Create 30 business ledgers. Enter an opening balance sheet provided by the instructor. Fix the 'Difference in Opening Balances' error.
                </div>`,
                shortcut: "Tally provides 'Cash' and 'Profit & Loss A/c' automatically. Alter them to add Opening Balances.",
                imgSrc: "images/tpro-13-opening-bal.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 4: VOUCHER ENTRIES (MONTH 2 CONT.)
    // ==========================================
    {
        id: "chapter4",
        title: "Module 4: Voucher Entry Mastery",
        topics: [
            {
                heading: "Contra (F4), Payment (F5), Receipt (F6)",
                text: `<strong>Contra (F4):</strong> Used ONLY for internal cash/bank transfers. (e.g., Depositing Cash into SBI Bank).<br>
                <strong>Payment (F5):</strong> Used strictly when money is going OUT to a supplier or for an expense.<br>
                <strong>Receipt (F6):</strong> Used strictly when money is coming IN from a customer or as capital.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 38-41 Practical:</strong> Pass 15 Receipt entries for capital and sales, 15 Payment entries for rent/salary, and 5 Contra entries for ATM withdrawals.
                </div>`,
                shortcut: "F4 = Internal Only | F5 = Money Out | F6 = Money In.",
                imgSrc: "images/tpro-14-contra.jpg"
            },
            {
                heading: "Journal (F7) & Credit/Debit Notes",
                text: `<strong>Journal (F7):</strong> The adjustment voucher for non-cash transactions (e.g., buying machinery on credit, depreciation).<br>
                <strong>Debit Note (Alt+F5):</strong> Purchase Return (Returning damaged goods to supplier).<br>
                <strong>Credit Note (Alt+F6):</strong> Sales Return (Customer returning goods to you).
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 42-47 Practical:</strong> Purchase furniture on credit using F7. Then pass 3 Debit Notes and 3 Credit Notes for defective trading goods.
                </div>`,
                shortcut: "F7 = Non-Cash Adjustments and Credit Purchases of Fixed Assets.",
                imgSrc: "images/tpro-16-journal.jpg"
            },
            {
                heading: "Day Book Overview",
                text: `The Day Book acts as your daily ledger log. It lists every single voucher entered on the current date.<br>
                - Press <strong>Alt+F2</strong> to change the period to see the whole month.<br>
                - Press <strong>Alt+X</strong> to 'Cancel' a voucher (this keeps the voucher number intact but voids the amount).
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 48-50 Practical (End of Month 2):</strong> Audit your Day Book. Find 3 specific entries, alter their amounts, and completely cancel 2 wrong entries.
                </div>`,
                shortcut: "Gateway of Tally > press 'K' to instantly open the Day Book.",
                imgSrc: "images/tpro-19-daybook.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 5: ADVANCED INVENTORY (MONTH 3)
    // ==========================================
    {
        id: "chapter5",
        title: "Module 5: Advanced Inventory Management",
        topics: [
            {
                heading: "Units of Measure & Compound Units",
                text: `Tally must know how you count goods. Go to <strong>Create > Unit</strong>.<br>
                <strong>Compound Units:</strong> If you buy pens in a Box, and 1 Box = 10 Pcs, create a compound unit (Box of 10 Pcs) so Tally tracks both boxes and individual pieces simultaneously.
                
                <div style="background-color: #f0fdfa; padding: 12px; border-left: 5px solid #0d9488; border-radius: 6px; margin-top: 20px;">
                    <strong style="color: #0f766e; font-size: 1.1rem;">🎯 MONTH 3 TARGET:</strong> Master complex inventory logistics, including multi-godown tracking, batch expiries, and order processing workflows.
                </div>
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 10px;">
                    <strong style="color: #b45309;">🛠️ Day 51-54 Practical:</strong> Create 5 simple units and 3 compound units (e.g., Dozen of 12 Pcs, Box of 50 Pcs).
                </div>`,
                shortcut: "Always assign the UQC (Unique Quantity Code) for GST.",
                imgSrc: "images/tpro-20-units.jpg"
            },
            {
                heading: "Godown Tracking & Stock Journals",
                text: `If you store goods in multiple locations, create Godowns (e.g., 'Main Shop', 'Warehouse A'). When passing a Purchase/Sales voucher, Tally asks which Godown the item enters/leaves.<br>
                <strong>Stock Journal (Alt+F7):</strong> Used to transfer stock from one Godown to another internally.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 55-60 Practical:</strong> Purchase 500 units into Warehouse A. Use a Stock Journal to safely transfer 100 units to the Main Shop.
                </div>`,
                shortcut: "Alt + F7 = Internal Stock Transfer.",
                imgSrc: "images/tpro-22-godowns.jpg"
            },
            {
                heading: "Batch-wise Details & Expiry Dates",
                text: `For pharmacies or food distributors, tracking expiry dates is legally required. Press F11 > Enable Batches > Enable Expiry Dates.<br>
                While creating a Stock Item (e.g., Paracetamol), activate Batches. During purchase, enter the Batch Number, Mfg Date, and Expiry Date. Tally will warn you if you try to sell expired stock!
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 61-66 Practical:</strong> Create 10 medicine items. Purchase them with strict batch numbers and 2026 expiry dates. Generate a Batch Expiry Report.
                </div>`,
                shortcut: "Gateway > Display > Inventory Books > Batch to track specific medicine lots.",
                imgSrc: "images/tpro-batch-tracking.jpg"
            },
            {
                heading: "Purchase & Sales Order Processing",
                text: `Before a bill is made, companies issue Orders. Press F11 > Enable Order Processing.<br>
                - <strong>Purchase Order (Ctrl+F9):</strong> Issuing a request to a supplier for goods.<br>
                - <strong>Sales Order (Ctrl+F8):</strong> Receiving a request from a customer.<br>
                Orders do NOT affect financial accounts or physical stock. They only track 'Pending Deliveries'.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 67-75 Practical (End of Month 3):</strong> Raise a Purchase Order for 100 Laptops. Receive only 80 Laptops (F9). View the 'Purchase Order Outstanding' report to track the pending 20.
                </div>`,
                shortcut: "Ctrl + F9 = Purchase Order | Ctrl + F8 = Sales Order.",
                imgSrc: "images/tpro-order-processing.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 6: TAXATION (GST, TDS, TCS) (MONTH 4)
    // ==========================================
    {
        id: "chapter6",
        title: "Module 6: Advanced Taxation",
        topics: [
            {
                heading: "Enabling GST & Tax Ledgers",
                text: `Press <strong>F11 (Features) > Enable GST</strong>. Select your State, Registration Type, and type the 15-digit GSTIN.<br>
                Create 3 ledgers under <strong>Duties & Taxes</strong> (Type: GST):<br>
                - <strong>CGST & SGST:</strong> Central & State Tax (for inside-state sales).<br>
                - <strong>IGST:</strong> Integrated Tax (for outside-state sales).
                
                <div style="background-color: #f0fdfa; padding: 12px; border-left: 5px solid #0d9488; border-radius: 6px; margin-top: 20px;">
                    <strong style="color: #0f766e; font-size: 1.1rem;">🎯 MONTH 4 TARGET:</strong> Become a certified Tax operator. Handle GST computations, e-Way bills, TDS deductions, and error-free GSTR returns.
                </div>
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 10px;">
                    <strong style="color: #b45309;">🛠️ Day 76-80 Practical:</strong> Setup complete GST configurations for the company. Create the 3 tax ledgers. Setup HSN codes and 18% tax rates on 5 stock items.
                </div>`,
                shortcut: "Never hard-code the tax rate (like 'CGST 9%') into the ledger. Let Tally calculate automatically.",
                imgSrc: "images/tpro-26-tax-ledgers.jpg"
            },
            {
                heading: "GST Entries, e-Way Bills & e-Invoicing",
                text: `In a Sales Voucher (F8), select your items and add CGST/SGST. Tally calculates the tax instantly.<br>
                <strong>e-Way Bills:</strong> Required for moving goods worth over ₹50,000. Tally prompts you to enter Transporter details (Vehicle No, Distance) and generates a JSON file to upload to the e-Way Bill portal.<br>
                <strong>e-Invoicing:</strong> For large companies, Tally pushes the invoice directly to the Govt portal (IRP) to generate an IRN and QR code automatically.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 81-88 Practical:</strong> Pass 20 GST Sales invoices. 5 must be above ₹50,000. Fill out the e-Way bill transporter details screen for those 5.
                </div>`,
                shortcut: "Press Ctrl+O > GST Tax Analysis to see exactly how Tally calculated the tax.",
                imgSrc: "images/tpro-27-gst-entries.jpg"
            },
            {
                heading: "GSTR-1 & GSTR-3B Reporting",
                text: `Tally automatically drafts your government tax returns.<br>
                - <strong>GSTR-1:</strong> Outward Supplies (All your sales).<br>
                - <strong>GSTR-3B:</strong> Summary of tax liability vs Input Tax Credit (ITC).<br>
                Review the 'Uncertain Transactions' section to fix errors (like missing GSTINs), then press <strong>Alt+E</strong> to export the JSON file for the GST Portal.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 89-94 Practical:</strong> Open GSTR-1. Deliberately delete a customer's GSTIN to trigger an 'Uncertain Transaction' error, then successfully resolve it.
                </div>`,
                shortcut: "Alt + G > type 'GSTR-1'.",
                imgSrc: "images/tpro-28-gstr-returns.jpg"
            },
            {
                heading: "TDS & TCS Processing",
                text: `<strong>TDS (Tax Deducted at Source):</strong> If you pay ₹50,000 for Audit Fees, you must deduct 10% TDS. Use Journal (F7) to record the expense and deduct the tax, then Payment (F5) to remit to the Govt.<br>
                <strong>TCS (Tax Collected at Source):</strong> Collected by the seller on goods like Timber or cars over ₹10L. Calculated automatically on the Sales invoice.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 95-100 Practical (End of Month 4):</strong> Create a TDS Nature of Payment (Sec 194J). Deduct TDS on 3 different professional fee bills and pass the Govt payment vouchers.
                </div>`,
                shortcut: "TDS is almost always deducted via a Journal Entry before the actual payment is made.",
                imgSrc: "images/tpro-29-tds-entries.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 7: PAYROLL & BANKING (MONTH 5)
    // ==========================================
    {
        id: "chapter7",
        title: "Module 7: Payroll & Employee Records",
        topics: [
            {
                heading: "Enabling Payroll & Salary Structures",
                text: `Press <strong>F11 > Maintain Payroll (Yes)</strong>.<br>
                Create Employee Groups (e.g., 'Admin') and Employees (with PAN/Bank details).<br>
                <strong>Pay Heads:</strong> Create Earnings (Basic Pay, HRA) as 'On Attendance', and Deductions (PF 12%) as 'Computed Value'. Define the Salary Details for each employee.
                
                <div style="background-color: #f0fdfa; padding: 12px; border-left: 5px solid #0d9488; border-radius: 6px; margin-top: 20px;">
                    <strong style="color: #0f766e; font-size: 1.1rem;">🎯 MONTH 5 TARGET:</strong> Automate complete HR Payroll systems, generate payslips, and master Bank Reconciliation (BRS).
                </div>
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 10px;">
                    <strong style="color: #b45309;">🛠️ Day 101-107 Practical:</strong> Setup 10 employees. Create a standard salary structure (Basic, HRA, DA, PF, ESI) and apply it to all 10.
                </div>`,
                shortcut: "Gateway > Create > Show More (To reveal Payroll Masters).",
                imgSrc: "images/tpro-31-payroll-enable.jpg"
            },
            {
                heading: "Processing Payroll & Payslips",
                text: `1. Go to Vouchers > F10 > Attendance. Mark 'Present' days.<br>
                2. Go to Vouchers > F10 > Payroll. Press <strong>Ctrl+F (Autofill)</strong>. Select 'Salary'. Tally reads the attendance, calculates the Basic Pay, deducts the PF, and generates the payable amount instantly!<br>
                3. Print the Payslip from Payroll Reports.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 108-115 Practical:</strong> Mark attendance for April. Use Ctrl+F to auto-calculate the salary for all 10 employees. Print 1 Payslip as PDF.
                </div>`,
                shortcut: "Ctrl + F (Payroll Autofill) is the most powerful button in the payroll system.",
                imgSrc: "images/tpro-34-payroll-process.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Module 8: Banking Features",
        topics: [
            {
                heading: "Bank Reconciliation Statement (BRS)",
                text: `Your Tally bank balance rarely matches your real Passbook due to uncleared cheques. Go to <strong>Banking > Bank Reconciliation</strong>. Look at your real bank statement, and type the actual 'Bank Date' next to the entries that have cleared. The 'Balance as per Bank' at the bottom will update to match your Passbook perfectly!
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 116-120 Practical:</strong> The instructor provides a dummy bank statement. Reconcile 20 transactions in Tally to match the closing balance.
                </div>`,
                shortcut: "Gateway > Banking > Bank Reconciliation (or Alt+R from the bank ledger display).",
                imgSrc: "images/tpro-35-brs.jpg"
            },
            {
                heading: "Cheque Printing & Deposit Slips",
                text: `<strong>Cheque Printing:</strong> Alter your Bank Ledger, enable 'Cheque Printing', and select your exact bank (like HDFC). Load a blank cheque in your printer, and Tally prints the Name, Date, and Amount perfectly.<br>
                <strong>Deposit Slips:</strong> Tally generates a single, professional deposit slip listing all cheque numbers received today to take to the bank.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 121-125 Practical (End of Month 5):</strong> Configure cheque printing for SBI. Print 3 dummy payment cheques on A4 paper to test alignment. Generate a Deposit Slip for 5 received cheques.
                </div>`,
                shortcut: "Always use 'Print Preview' to check alignment before wasting a real cheque.",
                imgSrc: "images/tpro-36-cheque-print.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 9: ADVANCED MIS & AUDIT (MONTH 6)
    // ==========================================
    {
        id: "chapter9",
        title: "Module 9: Advanced MIS, Audit & Security",
        topics: [
            {
                heading: "Cost Centres & Budgets",
                text: `<strong>Cost Centres:</strong> Used to track specific project expenses. If you pay ₹50,000 Salary, Cost Centres allow you to specify (Sales Team: 30K, Admin: 20K) without creating 50 separate ledgers. (F11 > Enable Cost Centres).<br>
                <strong>Budgets:</strong> Create a 'Marketing Budget' of ₹1,00,000 for the year. As you pass expenses, check the Budget Variance report to see how much funds remain.
                
                <div style="background-color: #f0fdfa; padding: 12px; border-left: 5px solid #0d9488; border-radius: 6px; margin-top: 20px;">
                    <strong style="color: #0f766e; font-size: 1.1rem;">🎯 MONTH 6 TARGET:</strong> Learn corporate-level tracking (Cost Centres/Budgets), perform year-end data splitting, and successfully pass the Capstone Projects to graduate.
                </div>
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 10px;">
                    <strong style="color: #b45309;">🛠️ Day 126-132 Practical:</strong> Create a ₹5L budget for Advertisement. Book ₹3L of expenses using Cost Centres for 'Facebook Ads' and 'Banners'. View the Variance Report.
                </div>`,
                shortcut: "Cost Centres analyze WHERE the money was spent, inside a single ledger.",
                imgSrc: "images/tpro-cost-centres.jpg"
            },
            {
                heading: "Security, Backup & Year-End Data Splitting",
                text: `<strong>Security:</strong> Press Alt+K > Security. Set 'Control User Access'. Create an Admin password. Create a 'Data Entry' user who cannot view the Balance Sheet.<br>
                <strong>Data Splitting:</strong> At the end of the Financial Year (31st March), press Alt+Y (Data) > Split. Tally automatically closes all P&L accounts, carries forward Balance Sheet assets, and creates a fresh company file for the new year!
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 133-140 Practical:</strong> Set an Admin password. Take a local backup (Alt+Y). Execute a Data Split for the new financial year and verify the new opening balances.
                </div>`,
                shortcut: "Warning: If you forget the Admin password, Tally Solutions cannot recover your data!",
                imgSrc: "images/tpro-26-security.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 10: CAPSTONE PROJECTS (MONTH 6)
    // ==========================================
    {
        id: "chapter10",
        title: "Module 10: Final Capstone Projects",
        topics: [
            {
                heading: "Project 1: The Trading Setup & GST",
                text: `<strong>Objective:</strong> Run a full accounting cycle for a hardware shop independently.<br>
                1. Create 'Tech World Traders'. Enable GST (18%).<br>
                2. Receipt (F6): Owner brings ₹10,00,000 Capital into HDFC Bank.<br>
                3. Purchase (F9): Buy 100 Laptops @ ₹30,000 (plus CGST/SGST) using Multi-Godowns.<br>
                4. Sales (F8): Sell 10 Laptops @ ₹45,000 (plus CGST/SGST) to 'Raj IT Solutions'. Generate an e-Way bill JSON.<br>
                <strong>Goal:</strong> P&L must show accurate Gross Profit. Balance Sheet must tally.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 141-144 Practical:</strong> Complete Project 1 without consulting notes. Save the final Balance Sheet as a PDF.
                </div>`,
                shortcut: "Save your data backup (Alt+Y) in your student folder after completing the project.",
                imgSrc: "images/tpro-39-project1.jpg"
            },
            {
                heading: "Project 2: Service & TDS Challenge",
                text: `<strong>Objective:</strong> Handle complex TDS deduction and professional service payments.<br>
                1. Enable TDS. Create 'Legal Expenses' and 'TDS on Legal Fees (10%)'.<br>
                2. Journal (F7): Receive a legal bill from 'Advocate Sharma' for ₹80,000. Deduct ₹8,000 TDS immediately in the entry.<br>
                3. Payment (F5): Pay ₹72,000 to Advocate Sharma via Cheque.<br>
                4. Payment (F5): Use Autofill (Ctrl+F) to pay the ₹8,000 TDS to the Government.<br>
                <strong>Goal:</strong> Balance Sheet 'Duties & Taxes' must show zero liability for TDS.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 145-147 Practical:</strong> Complete Project 2. Submit the TDS Stat Payment voucher printout to the instructor.
                </div>`,
                shortcut: "TDS must ALWAYS be deducted via a Journal entry before processing the Payment voucher.",
                imgSrc: "images/tpro-40-project2.jpg"
            },
            {
                heading: "Project 3: Full Month Payroll Processing",
                text: `<strong>Objective:</strong> Process a fully automated monthly salary.<br>
                1. Enable Payroll. Create Employee Group 'Managers'.<br>
                2. Create Employee 'Suresh'. Set Basic Pay (₹25,000) and PF Deduction (12% computed on Basic).<br>
                3. Attendance (F10): Mark Suresh 'Present' for 28 days.<br>
                4. Payroll (F10): Press Ctrl+F (Autofill) to process the exact salary.<br>
                <strong>Goal:</strong> Print the final Payslip showing exact Net Payable.
                
                <div style="background-color: #fffbeb; padding: 12px; border-left: 5px solid #f59e0b; border-radius: 6px; margin-top: 15px;">
                    <strong style="color: #b45309;">🛠️ Day 148-150 Practical (Graduation):</strong> Complete Project 3. Print the Payslip. Take a final full backup of all 3 projects to your USB drive. Course Complete! 🎉
                </div>`,
                shortcut: "Ensure the month has 30 days in your calculation settings.",
                imgSrc: "images/tpro-41-project3.jpg"
            }
        ]
    }
];
