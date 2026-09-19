// tally-pro-data.js
// Excellent Institute - Advanced Tally Prime 7.0 & Accounting Professional Course

const tallyProBookData = [
    // ==========================================
    // MODULE 1: INTRODUCTION TO ACCOUNTING
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
                3. <strong>Accrual Concept:</strong> Incomes and expenses are recorded when they occur, not when the cash is actually exchanged. If rent is due for March, it is recorded in March, even if paid in April.<br>
                4. <strong>Dual Aspect (The Accounting Equation):</strong> Assets = Liabilities + Owner's Equity (Capital). Every transaction affects both sides equally.`,
                shortcut: "Accounting's ultimate goal is twofold: Ascertaining Profit/Loss (via P&L) and showing Financial Position (via Balance Sheet).",
                imgSrc: "images/tpro-01-principles.jpg"
            },
            {
                heading: "Types of Accounts (The Golden Rules)",
                text: `To record any transaction accurately, you MUST memorize the Three Golden Rules of Accounting. Every account falls into one of three categories:<br><br>
                <strong>1. Real Account (Assets & Properties):</strong> Tangible things like Cash, Furniture, Computers, and Land.<br>
                👉 <em>Rule: Debit what comes in, Credit what goes out.</em><br><br>
                <strong>2. Personal Account (People & Companies):</strong> Names of individuals, bank accounts, suppliers, and customers (e.g., SBI Bank, Rahul Traders).<br>
                👉 <em>Rule: Debit the receiver, Credit the giver.</em><br><br>
                <strong>3. Nominal Account (Expenses & Incomes):</strong> Things that represent money spent or earned, like Rent, Salary, Sales, and Commission.<br>
                👉 <em>Rule: Debit all expenses and losses, Credit all incomes and gains.</em>`,
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
                - Cash Account (Real A/c) goes out 👉 Cr. 5,000`,
                shortcut: "Journal entries are recorded chronologically (day-by-day) in the primary books of accounts.",
                imgSrc: "images/tpro-03-double-entry.jpg"
            },
            {
                heading: "Ledger Posting, Trial Balance and Final Accounts",
                text: `<strong>1. Ledger Posting:</strong> Transferring journal entries to individual account diaries. The 'Cash Ledger' will show all cash ins and outs, ending with a final balance.<br><br>
                <strong>2. Trial Balance:</strong> A summary sheet listing the closing balances of all ledgers. If your accounting is accurate, the total of all Debit balances will exactly equal the total of all Credit balances.<br><br>
                <strong>3. Final Accounts:</strong> Prepared at year-end. Includes:<br>
                - <em>Trading A/c:</em> Shows Gross Profit from direct buying and selling.<br>
                - <em>Profit & Loss A/c:</em> Subtracts indirect expenses (salary, rent) to show Net Profit.<br>
                - <em>Balance Sheet:</em> A snapshot of Assets and Liabilities.`,
                shortcut: "In Tally Prime, you only do Voucher Entries. Tally instantly builds the Ledgers, Trial Balance, and Final Accounts automatically!",
                imgSrc: "images/tpro-04-final-accounts.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 2: BASICS OF TALLY PRIME 7.0
    // ==========================================
    {
        id: "chapter2",
        title: "Module 2: Basics of Tally",
        topics: [
            {
                heading: "Overview of Tally ERP & Tally Prime",
                text: `Tally ERP 9 was the older, blue-screen standard. Tally Prime 7.0 is the modern, color-optimized successor. Tally Prime introduces a much cleaner interface, the powerful 'Go To' search bar, and seamless multitasking. Under the hood, Prime 7.0 manages GST compliance, e-Invoicing, and audit trails automatically to meet modern government regulations.`,
                shortcut: "Tally Prime is designed to be fully operated using a keyboard. Using a mouse slows down a professional accountant.",
                imgSrc: "images/tpro-05-overview.jpg"
            },
            {
                heading: "Installation and Interface Walkthrough",
                text: `Download Tally Prime from tallysolutions.com. Install it and open the software. Click <strong>'Continue in Educational Mode'</strong>. <br><br>
                <strong>The Top Menu Bar:</strong> This is a new feature in Prime. It contains universal commands: Company (Alt+K), Data (Alt+Y), Exchange (Alt+Z), Go To (Alt+G), Import (Alt+O), Export (Alt+E), Email (Alt+M), Print (Alt+P), and Help (F1). These top menus can be accessed from any screen inside the software.`,
                shortcut: "Educational Mode works exactly like the paid version, but restricts date entry to the 1st, 2nd, and 31st of the month.",
                imgSrc: "images/tpro-06-interface.jpg"
            },
            {
                heading: "Creating, Altering, Deleting Company",
                text: `Press <strong>Alt+K</strong> (Company Menu) and select <strong>Create</strong>. Enter the Company Name, Mailing Address, and select the State. <em>(Selecting the correct state is vital for accurate GST calculations)</em>. The Financial Year typically starts on 1st April.<br><br>
                <strong>Altering:</strong> Press Alt+K > Alter to fix spelling mistakes.<br>
                <strong>Deleting:</strong> Go to the Alter screen and press <strong>Alt+D</strong>. A warning will appear. Press 'Y' to permanently destroy the company and all its data.`,
                shortcut: "Alt + D is the universal 'Delete' command in Tally for companies, ledgers, and vouchers.",
                imgSrc: "images/tpro-07-company.jpg"
            },
            {
                heading: "Understanding Gateway of Tally",
                text: `The <strong>Gateway of Tally</strong> is your central steering wheel. It is divided into four main blocks:<br>
                1. <strong>Masters:</strong> Create and Alter (Used to build Ledgers, Stock Items, and Godowns).<br>
                2. <strong>Transactions:</strong> Vouchers and Day Book (Where you enter daily business bills).<br>
                3. <strong>Utilities:</strong> Banking (For Bank Reconciliation and Cheque printing).<br>
                4. <strong>Reports:</strong> Balance Sheet, P&L A/c, Ratio Analysis, and Display More Reports.`,
                shortcut: "Press the 'Esc' (Escape) key multiple times to back out of any menu and return to the Gateway of Tally.",
                imgSrc: "images/tpro-08-gateway.jpg"
            },
            {
                heading: "Navigation and Keyboard Shortcuts",
                text: `Master these Tally Prime shortcuts to work like a professional:<br>
                - <strong>Alt + G (Go To):</strong> The magic search bar. If you are typing a long bill and the boss asks for a report, press Alt+G, search the report, view it, and press Esc to return exactly to your bill without losing data.<br>
                - <strong>Ctrl + A:</strong> Instantly accept and save any screen without pressing 'Enter' 20 times.<br>
                - <strong>F12 (Configure):</strong> Opens hidden settings on your current screen.<br>
                - <strong>F11 (Features):</strong> Opens the core company features (Accounting, Inventory, Taxation).`,
                shortcut: "If you cannot find a specific option on a screen, press F12! It is likely hidden in the configuration menu.",
                imgSrc: "images/tpro-09-shortcuts.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 3: COMPANY CREATION & LEDGER MANAGEMENT
    // ==========================================
    {
        id: "chapter3",
        title: "Module 3: Company Creation & Ledger Management",
        topics: [
            {
                heading: "Company Configuration Options (F11)",
                text: `As soon as you create and save a company, the F11 Features screen appears. Here you define the business operations.<br>
                - <strong>Accounting:</strong> Set 'Maintain Accounts' to Yes.<br>
                - <strong>Inventory:</strong> If it is a product-selling shop, set 'Maintain Inventory' to Yes, and 'Integrate Accounts with Inventory' to Yes.<br>
                - <strong>Taxation:</strong> Enable GST, TDS, or TCS if applicable.<br>
                - <strong>Payroll:</strong> Enable if you plan to manage employee salaries through Tally.`,
                shortcut: "You can press F11 from the Gateway of Tally at any point in the future to turn these features on or off.",
                imgSrc: "images/tpro-10-f11.jpg"
            },
            {
                heading: "Understanding Group Hierarchy",
                text: `Tally operates on a strict Group Hierarchy. There are 28 Pre-defined Groups (15 Primary, 13 Sub-groups). Placing a ledger in the wrong group will completely ruin the Balance Sheet.<br>
                <strong>Key Groups:</strong><br>
                - <em>Sundry Debtors:</em> Customers you sell to (Current Assets).<br>
                - <em>Sundry Creditors:</em> Suppliers you buy from (Current Liabilities).<br>
                - <em>Fixed Assets:</em> Computers, Land, Furniture owned by the business.<br>
                - <em>Indirect Expenses:</em> Office Rent, Staff Salary, Electricity Bill.<br>
                - <em>Duties & Taxes:</em> All GST, TDS, and Tax ledgers.`,
                shortcut: "Gateway of Tally > Chart of Accounts > Groups (To view the entire tree structure).",
                imgSrc: "images/tpro-11-groups.jpg"
            },
            {
                heading: "Creating Ledgers (Cash, Bank, Sales, Purchase)",
                text: `Go to <strong>Gateway of Tally > Create > Ledger</strong>.<br>
                - Type 'Sales A/c' and put it under 'Sales Accounts'.<br>
                - Type 'Purchase A/c' and put it under 'Purchase Accounts'.<br>
                - Type 'SBI Bank' and put it under 'Bank Accounts'. Provide the A/c number and IFSC code for e-Banking.<br>
                - Create a Customer Name and put them under 'Sundry Debtors'. Provide their Mailing Address and State (crucial for GST).`,
                shortcut: "Tally automatically provides two ledgers for free: 'Cash' and 'Profit & Loss A/c'. Do not try to create them again.",
                imgSrc: "images/tpro-12-ledgers.jpg"
            },
            {
                heading: "Assigning Opening Balances",
                text: `If you are switching an existing business to Tally, you must enter their current financial position as 'Opening Balances'.<br><br>
                Go to <strong>Alter > Ledger</strong>. Select the 'Cash' ledger, and at the bottom, type the exact cash available in the shop today. Ensure Tally marks Assets as 'Dr' (Debit) and Liabilities/Capital as 'Cr' (Credit). A mismatch here creates a 'Difference in Opening Balances' error in the Balance Sheet.`,
                shortcut: "You can enter multiple opening balances rapidly from Gateway > Chart of Accounts > Ledgers > Press Alt+H (Multi Masters) > Multi Alter.",
                imgSrc: "images/tpro-13-opening-bal.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 4: VOUCHER ENTRY IN TALLY
    // ==========================================
    {
        id: "chapter4",
        title: "Module 4: Voucher Entry in Tally",
        topics: [
            {
                heading: "Contra Voucher (F4)",
                text: `<strong>Press F4 from the Vouchers screen.</strong><br>
                Contra is a specialized voucher used ONLY for internal money movement between Cash and Bank accounts. No outside supplier or customer is involved.<br>
                <strong>Examples:</strong><br>
                1. Depositing Cash into the Bank (Dr. Bank / Cr. Cash).<br>
                2. Withdrawing Cash from the ATM for office use (Dr. Cash / Cr. Bank).<br>
                3. Transferring funds from SBI Bank to HDFC Bank (Dr. HDFC / Cr. SBI).`,
                shortcut: "F4 = Internal Cash/Bank movement ONLY.",
                imgSrc: "images/tpro-14-contra.jpg"
            },
            {
                heading: "Payment (F5) and Receipt (F6) Vouchers",
                text: `<strong>Payment Voucher (F5):</strong> Used strictly when money is going OUT of the business. You use it to pay Suppliers (Creditors), pay office rent, pay salaries, or purchase fixed assets for cash.<br><br>
                <strong>Receipt Voucher (F6):</strong> Used strictly when money is coming INTO the business. You use it when the owner brings in Capital, when you receive a loan, or when a Customer (Debtor) pays their outstanding bill.`,
                shortcut: "F5 = Money Out | F6 = Money In.",
                imgSrc: "images/tpro-15-payment-receipt.jpg"
            },
            {
                heading: "Journal Voucher (F7)",
                text: `<strong>Press F7 from the Vouchers screen.</strong><br>
                The Journal is the adjustment voucher. It is used for transactions where absolutely NO cash or bank money moves at that exact moment.<br>
                <strong>Uses:</strong><br>
                1. Buying Fixed Assets on credit (Dr. Computer / Cr. Supplier A/c).<br>
                2. Recording Depreciation on assets (Dr. Depreciation / Cr. Asset).<br>
                3. Adjusting tax liabilities or rectifying accounting errors.`,
                shortcut: "F7 = Non-Cash Adjustments and Credit Purchases of Assets.",
                imgSrc: "images/tpro-16-journal.jpg"
            },
            {
                heading: "Sales (F8) & Purchase (F9) Vouchers",
                text: `These vouchers are exclusively for trading stock/inventory.<br>
                <strong>Purchase (F9):</strong> Used when buying goods from a supplier to resell. Enter the Supplier Invoice No, select the Party A/c, select Purchase A/c, and list the items and quantities.<br>
                <strong>Sales (F8):</strong> Used when selling goods to a customer. Select the Party A/c, Sales A/c, and list the items. Tally will automatically calculate the subtotal.`,
                shortcut: "Press Ctrl+H (Change Mode) in F8/F9 to switch between 'Item Invoice' (for inventory) and 'As Voucher' (for manual Dr/Cr entries).",
                imgSrc: "images/tpro-17-sales-purchase.jpg"
            },
            {
                heading: "Credit Note (Alt+F6) & Debit Note (Alt+F5)",
                text: `These are used for Returns and Price Adjustments.<br>
                <strong>Debit Note (Alt+F5):</strong> Purchase Return. You bought 10 laptops, but 2 are broken. You pass a Debit Note to return them to the supplier and reduce your liability.<br>
                <strong>Credit Note (Alt+F6):</strong> Sales Return. A customer returns damaged goods back to you. You pass a Credit Note to receive the stock back and reduce the customer's outstanding balance.`,
                shortcut: "Press F10 (Other Vouchers) if you forget the shortcuts for Debit/Credit Notes.",
                imgSrc: "images/tpro-18-notes.jpg"
            },
            {
                heading: "Day Book Overview",
                text: `The Day Book (Gateway of Tally > Day Book) acts as your daily ledger log. It lists every single voucher entered on the current date.<br>
                - Press <strong>Alt+F2</strong> to change the period (e.g., from 01-Apr to 30-Apr) to see the whole month.<br>
                - Select any voucher and press Enter to alter it.<br>
                - Press <strong>Alt+X</strong> to 'Cancel' a voucher (this keeps the voucher number intact but voids the amount for audit purposes).`,
                shortcut: "Gateway of Tally > press 'K' to instantly open the Day Book.",
                imgSrc: "images/tpro-19-daybook.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 5: INVENTORY MANAGEMENT
    // ==========================================
    {
        id: "chapter5",
        title: "Module 5: Inventory Management",
        topics: [
            {
                heading: "Units of Measure (Simple & Compound)",
                text: `Tally must know how you count your goods. Go to <strong>Create > Unit</strong>.<br>
                <strong>Simple Units:</strong> Create a Symbol (PCS) and Formal Name (Pieces). You MUST select the official UQC (Unique Quantity Code) as 'NOS-NUMBERS' for GST filing.<br>
                <strong>Compound Units:</strong> Press Backspace on the Unit Creation screen and change the Type to 'Compound'. You can define logic like "Box of 10 PCS". This allows Tally to sell 1 Box or just 2 individual pieces from the same stock.`,
                shortcut: "Gateway > Create > Unit.",
                imgSrc: "images/tpro-20-units.jpg"
            },
            {
                heading: "Creating Stock Groups, Categories & Items",
                text: `To keep a clean godown, organize your stock hierarchically.<br>
                - <strong>Stock Group:</strong> The main family (e.g., 'Mobile Phones' or 'Laptops').<br>
                - <strong>Stock Category:</strong> An independent classification. (To use this, go to Create > Show More > Stock Category). Create categories like 'Samsung' or 'Dell'.<br>
                - <strong>Stock Item:</strong> The actual product. Go to Create > Stock Item. Name it 'Samsung Galaxy S23', put it under Mobile Phones group, Samsung category, and PCS unit.`,
                shortcut: "Press F12 while creating a Stock Item to enable descriptions, part numbers, or alternative units.",
                imgSrc: "images/tpro-21-stock-items.jpg"
            },
            {
                heading: "Godown Creation and Tracking",
                text: `If you store goods in multiple physical locations, you need Godowns. Press <strong>F11</strong> and ensure 'Maintain Multiple Godowns' is enabled.<br>
                Go to <strong>Create > Godown</strong>. Create 'Main Shop', 'Warehouse A', etc. Now, when passing a Purchase (F9) or Sales (F8) voucher, an extra box will pop up asking you exactly which Godown the item is entering or leaving.`,
                shortcut: "Tally provides a default godown named 'Main Location'.",
                imgSrc: "images/tpro-22-godowns.jpg"
            },
            {
                heading: "Entering Opening Stock",
                text: `If you already have existing stock before using Tally, you must enter it.<br>
                Go to <strong>Alter > Stock Item</strong>. Select your item, go to the bottom field named 'Opening Balance', enter the Quantity and the Rate. If you have multiple godowns, Tally will ask you to specify how much of that stock is sitting in which godown.`,
                shortcut: "Opening Stock value directly impacts the Trading A/c Gross Profit.",
                imgSrc: "images/tpro-23-opening-stock.jpg"
            },
            {
                heading: "Stock Summary and Inventory Reports",
                text: `Go to <strong>Gateway of Tally > Stock Summary</strong>. This report shows your real-time closing stock and its total financial value.<br>
                - Press <strong>Alt+F5</strong> for a detailed view showing Groups and Items.<br>
                - Select any item and press Enter to view the 'Stock Item Monthly Summary'. Press Enter again to see the 'Godown/Item Vouchers', which lists every single inward and outward movement of that specific product.`,
                shortcut: "Press F12 in Stock Summary to show Opening Balance, Goods Inwards, Goods Outwards, and Closing Balance side-by-side.",
                imgSrc: "images/tpro-24-stock-summary.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 6: TAXATION (GST, TDS, TCS)
    // ==========================================
    {
        id: "chapter6",
        title: "Module 6: Taxation (GST, TDS, TCS)",
        topics: [
            {
                heading: "Enabling GST, TDS, TCS in Tally",
                text: `Press <strong>F11 (Features)</strong>.<br>
                - <strong>Enable GST:</strong> Set to Yes. Select your State, Registration Type (Regular/Composition), and type the 15-digit GSTIN. Configure e-Way bill limits if needed.<br>
                - <strong>Enable TDS:</strong> Set to Yes. Enter your company's TAN (Tax Deduction Account Number) and deductor type.<br>
                - <strong>Enable TCS:</strong> Set to Yes if your business collects tax on specific sales like Scrap, Timber, or Motor Vehicles above ₹10 Lakh.`,
                shortcut: "GSTIN structure: First 2 digits are State Code, next 10 are PAN, last 3 are entity codes.",
                imgSrc: "images/tpro-25-enable-tax.jpg"
            },
            {
                heading: "Creating Tax Ledgers",
                text: `Tax ledgers must be grouped under <strong>Duties & Taxes</strong>.<br>
                <strong>For GST:</strong> Create 3 ledgers. Type of Duty: GST.<br>
                - <strong>CGST</strong> (Central Tax) & <strong>SGST</strong> (State Tax) are used together for sales inside your state.<br>
                - <strong>IGST</strong> (Integrated Tax) is used alone for sales outside your state.<br>
                <strong>For TDS:</strong> Create a ledger like 'TDS on Professional Fees'. Type of Duty: TDS. Select the Nature of Payment (e.g., Sec 194J).`,
                shortcut: "Never hard-code the tax rate (like 'CGST 9%') into the ledger unless your firm demands it. Keep it generic ('CGST') and let Tally pull the rate from the Stock Item.",
                imgSrc: "images/tpro-26-tax-ledgers.jpg"
            },
            {
                heading: "GST-enabled Sales & Purchase Entries",
                text: `Go to a Sales Voucher (F8). Select the Customer, Sales A/c, and Stock Items. Tally knows the tax rate based on the Item's HSN configuration. At the bottom of the invoice, select the CGST and SGST ledgers. The tax amount will calculate automatically.<br>
                <strong>Pro Tip:</strong> Press <strong>Ctrl+O > GST Tax Analysis</strong> (or Alt+A in older versions) to see a detailed breakdown of exactly how Tally calculated the tax amount.`,
                shortcut: "If the tax does not calculate automatically, check the Customer's State or the Item's GST configuration.",
                imgSrc: "images/tpro-27-gst-entries.jpg"
            },
            {
                heading: "GSTR-1, GSTR-3B Reporting in Tally",
                text: `Tally automatically drafts your government tax returns based on your voucher entries.<br>
                - <strong>GSTR-1 (Outward Supplies):</strong> Press Alt+G and type 'GSTR-1'. It shows all B2B and B2C sales invoices.<br>
                - <strong>GSTR-3B (Summary Return):</strong> Press Alt+G and type 'GSTR-3B'. It shows your total tax liability against your Input Tax Credit (ITC).<br>
                Review the 'Uncertain Transactions' section to fix errors (like missing GSTINs), then press <strong>Alt+E</strong> to export the Return as a JSON file for the GST Portal.`,
                shortcut: "Alt + G > type 'GSTR-1' or 'GSTR-3B'.",
                imgSrc: "images/tpro-28-gstr-returns.jpg"
            },
            {
                heading: "TDS Deduction Entries",
                text: `If you receive an Audit bill for ₹50,000 from Sharma CA, you must deduct 10% TDS.<br>
                1. <strong>Journal (F7):</strong> Dr. Audit Expense 50,000 | Cr. Sharma CA 45,000 | Cr. TDS on Prof Fees 5,000. (Tally calculates the deduction automatically if the ledgers are configured).<br>
                2. <strong>Payment (F5):</strong> Pay ₹45,000 to Sharma CA via Bank.<br>
                3. <strong>Payment (F5):</strong> Pay ₹5,000 to the Government (TDS Ledger) via Bank. Use 'Autofill' (Ctrl+F) > Stat Payment > TDS.`,
                shortcut: "TDS is almost always deducted via a Journal Entry before the actual payment is made.",
                imgSrc: "images/tpro-29-tds-entries.jpg"
            },
            {
                heading: "Basics of TCS Entries",
                text: `TCS (Tax Collected at Source) is collected by the seller from the buyer at the time of sale. For example, selling Scrap. <br>
                You configure the Sales ledger and Stock Item for TCS. In the Sales Voucher (F8), select the Items, add GST, and then add a 'TCS on Scrap' ledger at the very bottom. Tally calculates the TCS on the total bill value (including GST). You then remit this collected TCS to the government using a Stat Payment.`,
                shortcut: "TCS ledgers are also created under 'Duties & Taxes' with the Type set to TCS.",
                imgSrc: "images/tpro-30-tcs-entries.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 7: PAYROLL & EMPLOYEE RECORDS
    // ==========================================
    {
        id: "chapter7",
        title: "Module 7: Payroll & Employee Records",
        topics: [
            {
                heading: "Enabling Payroll & Creating Employee Masters",
                text: `Press <strong>F11 > Maintain Payroll (Yes)</strong>. To calculate Statutory deductions like PF and ESI, set 'Enable Payroll Statutory' to Yes and enter your company's PF/ESI registration codes.<br>
                <strong>Masters:</strong> Go to Create > Show More. First, create <strong>Employee Groups</strong> (e.g., 'Marketing', 'Admin'). Then, go to <strong>Employee</strong> creation. Enter their Name, Joining Date, Group, PAN, Aadhaar, and Bank Account details for salary transfers.`,
                shortcut: "Gateway > Create > Show More (To reveal all Payroll master options).",
                imgSrc: "images/tpro-31-payroll-enable.jpg"
            },
            {
                heading: "Attendance & Leave Configuration",
                text: `Go to <strong>Create > Attendance/Production Type</strong>.<br>
                - Create 'Present' and set the type to <em>Attendance/Leave with Pay</em>.<br>
                - Create 'Absent' and set the type to <em>Leave without Pay</em>.<br>
                - Create 'Overtime' and set the type to <em>Production</em> (measured in Hours).<br>
                These attendance types are required to log how many days the employee actually worked.`,
                shortcut: "Gateway > Create > Attendance/Production Type.",
                imgSrc: "images/tpro-32-attendance-type.jpg"
            },
            {
                heading: "Creating Pay Heads and Salary Structures",
                text: `A <strong>Pay Head</strong> is a component of the salary. Go to Create > Pay Head.<br>
                - <em>Basic Pay & HRA:</em> Type 'Earnings for Employees', Income type 'Fixed', Calculation 'On Attendance' (Present).<br>
                - <em>PF Deduction:</em> Type 'Employees Statutory Deduction', Calculation 'As Computed Value' (e.g., 12% of Basic Pay).<br>
                Next, go to <strong>Create > Define Salary Details</strong>. Select the Employee, enter an Effective Date, and map the Pay Heads (e.g., Basic = 15,000, HRA = 5,000) to complete their structure.`,
                shortcut: "Pay Heads define the logic. Salary Details attach that logic to the specific person.",
                imgSrc: "images/tpro-33-pay-heads.jpg"
            },
            {
                heading: "Processing Payroll & Payslip Generation",
                text: `<strong>Step 1:</strong> Go to Vouchers > F10 > Attendance. Select the employee, choose 'Present', and enter 28 Days.<br>
                <strong>Step 2:</strong> Go to Vouchers > F10 > Payroll. Press <strong>Ctrl+F (Autofill)</strong>. Select 'Salary', choose the date range, and select the Employee Group. Tally will read the 28 days of attendance, calculate the Basic Pay, deduct the PF, and generate the exact payable amount instantly!<br>
                <strong>Step 3:</strong> Go to Display More Reports > Payroll Reports > Payslip to print the professional salary slip.`,
                shortcut: "Ctrl + F (Payroll Autofill) is the most powerful button in the payroll system.",
                imgSrc: "images/tpro-34-payroll-process.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 8: BANKING FEATURES IN TALLY
    // ==========================================
    {
        id: "chapter8",
        title: "Module 8: Banking Features in Tally",
        topics: [
            {
                heading: "Bank Reconciliation Statement (BRS)",
                text: `Your Tally bank balance rarely matches your real Passbook due to uncleared cheques. To fix this, go to <strong>Banking > Bank Reconciliation</strong>. Select your Bank. Tally shows all un-reconciled transactions. Look at your real bank statement, and type the actual 'Bank Date' next to the entries that have cleared. The 'Balance as per Bank' at the bottom will automatically update to match your real Passbook exactly!`,
                shortcut: "Gateway > Banking > Bank Reconciliation (or Alt+R from the bank ledger display).",
                imgSrc: "images/tpro-35-brs.jpg"
            },
            {
                heading: "Cheque Printing Setup",
                text: `Tally can print details directly onto blank physical cheques. Go to Alter > Ledger > Select your Bank. Enable 'Enable Cheque Printing' and click 'Set/Alter Cheque Printing Configuration'. Select your exact bank (like HDFC or ICICI) from the right-side list. Tally will load the exact physical dimensions of that bank's cheque. Put a blank cheque in your printer, pass a Payment voucher, and Tally will print the Name, Date, and Amount perfectly on the lines.`,
                shortcut: "Always use 'Print Preview' to check alignment before wasting a real cheque.",
                imgSrc: "images/tpro-36-cheque-print.jpg"
            },
            {
                heading: "Deposit Slips and Payment Advices",
                text: `<strong>Deposit Slips:</strong> Go to Banking > Deposit Slip. If you received 10 different cheques from customers today, Tally will generate a single, professional deposit slip listing all cheque numbers, dates, and amounts. Print this and take it to the bank along with the cheques.<br>
                <strong>Payment Advice:</strong> When you pay a supplier via NEFT or Cheque, Tally can generate a formal Payment Advice letter to email them, detailing which invoices the payment covers.`,
                shortcut: "Gateway > Banking > Deposit Slip / Payment Advice.",
                imgSrc: "images/tpro-37-deposit-slip.jpg"
            },
            {
                heading: "Overdraft Entries & e-Banking Integration",
                text: `<strong>Bank OD (Overdraft):</strong> If your business uses a credit line/overdraft, create the bank ledger under the group <strong>'Bank OD A/c'</strong> instead of 'Bank Accounts'. Tally will correctly track negative balances as a Liability.<br>
                <strong>e-Banking Integration:</strong> If configured, Tally Prime allows you to export payment instructions. Pass your payment vouchers, go to Banking > e-Payments, and export the file. Upload this file to your corporate net-banking portal to process all employee salaries or supplier payments simultaneously.`,
                shortcut: "Bank OD A/c is a Current Liability, whereas a normal Bank A/c is a Current Asset.",
                imgSrc: "images/tpro-38-ebanking.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 9: REAL-WORLD CAPSTONE PROJECTS
    // ==========================================
    {
        id: "chapter9",
        title: "Module 9: Capstone Projects",
        topics: [
            {
                heading: "Project 1: The Trading Company Setup",
                text: `<strong>Objective:</strong> Run a full accounting cycle for a hardware shop.<br>
                1. Create 'Tech World Traders'. Enable GST (18%).<br>
                2. Pass Receipt (F6): Owner brings ₹10,00,000 Capital into HDFC Bank.<br>
                3. Create Godowns: 'Shop' and 'Warehouse'.<br>
                4. Pass Purchase (F9): Buy 100 Dell Laptops @ ₹30,000 each (plus CGST/SGST) from 'Mega Distributors'. Store 20 in Shop, 80 in Warehouse.<br>
                5. Pass Sales (F8): Sell 5 Laptops @ ₹45,000 each (plus CGST/SGST) to 'Raj IT Solutions'.<br>
                <strong>Check:</strong> View the P&L to verify Gross Profit. View GSTR-1 to ensure the sale is recorded under B2B invoices.`,
                shortcut: "Save your data backup (Alt+Y) in your student folder after completing the project.",
                imgSrc: "images/tpro-39-project1.jpg"
            },
            {
                heading: "Project 2: The Service & Taxation Challenge",
                text: `<strong>Objective:</strong> Handle complex TDS deduction and service payments.<br>
                1. Enable TDS in F11. Create a ledger 'Legal Expenses' and 'TDS on Legal Fees (10%)'.<br>
                2. Pass Journal (F7): Receive a legal bill from 'Advocate Sharma' for ₹80,000. Deduct ₹8,000 TDS immediately in the entry.<br>
                3. Pass Payment (F5): Pay ₹72,000 to Advocate Sharma via Cheque (use Cheque printing preview).<br>
                4. Pass Payment (F5): Use Autofill (Ctrl+F) > Stat Payment to pay the ₹8,000 TDS to the Government.<br>
                <strong>Check:</strong> Open the Balance Sheet. Ensure 'Duties & Taxes' shows zero liability for TDS after the final payment.`,
                shortcut: "TDS must ALWAYS be deducted via a Journal entry before processing the Payment voucher.",
                imgSrc: "images/tpro-40-project2.jpg"
            },
            {
                heading: "Project 3: Advanced Payroll Automation",
                text: `<strong>Objective:</strong> Process a fully automated monthly salary.<br>
                1. Enable Payroll in F11. Create Employee Group 'Managers'.<br>
                2. Create Employee 'Suresh'. Set Basic Pay (₹25,000) and PF Deduction (12% computed on Basic).<br>
                3. Pass Attendance (F10): Mark Suresh 'Present' for 28 days in a 30-day month.<br>
                4. Pass Payroll (F10): Press Ctrl+F (Autofill) to process the salary. Tally will calculate 28 days of pro-rated Basic Pay and automatically deduct the 12% PF.<br>
                <strong>Check:</strong> Go to Payroll Reports and preview Suresh's Payslip to verify the exact Net Payable amount.`,
                shortcut: "Ensure your Pay Heads are strictly defined as 'On Attendance' for Basic Pay, and 'As Computed Value' for PF.",
                imgSrc: "images/tpro-41-project3.jpg"
            }
        ]
    }
];
