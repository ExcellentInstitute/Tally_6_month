// tally-pro-data.js
// Excellent Institute - Advanced Tally Prime 7.0 & Accounting Professional Course (6-Month Curriculum)

const tallyProBookData = [
    // ==========================================
    // MONTH 1: ACCOUNTING FOUNDATIONS & TALLY UI
    // ==========================================
    {
        id: "chapter1",
        title: "Module 1: Introduction to Accounting (Month 1)",
        topics: [
            {
                heading: "Fundamental Principles of Accounting",
                text: `Accounting is the universal language of business. It is the systematic process of recording, summarizing, analyzing, and reporting financial transactions.<br><br>
                <strong>Key Principles:</strong><br>
                1. <strong>Business Entity Concept:</strong> The owner and the business are two completely separate entities. If the owner takes cash for personal use, it is recorded as 'Drawings'.<br>
                2. <strong>Going Concern:</strong> We assume the business will run forever. This is why we record long-term assets at their original cost.<br>
                3. <strong>Accrual Concept:</strong> Incomes and expenses are recorded when they occur, not when the cash is actually exchanged.<br>
                4. <strong>Dual Aspect (The Accounting Equation):</strong> Assets = Liabilities + Owner's Equity (Capital). Every transaction affects both sides equally.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 1 & 2: Introduction to Business Entities</h4>
                    <strong>📖 Theory:</strong> Understand the Business Entity Concept and Going Concern. Why do we keep owner and business separate?<br>
                    <strong>💻 Practical:</strong> Write down 10 examples of business transactions and identify the two entities involved in each on paper.
                </div>
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 10px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 3 & 4: Accrual & Dual Aspect</h4>
                    <strong>📖 Theory:</strong> Deep dive into Accrual Concept and the Accounting Equation (Assets = Liab + Equity).<br>
                    <strong>💻 Practical:</strong> Solve 5 basic accounting equation problems in Excel/Notebook. Prove that Assets always equal Liabilities + Capital.
                </div>`,
                shortcut: "Accounting's ultimate goal is twofold: Ascertaining Profit/Loss (via P&L) and showing Financial Position (via Balance Sheet).",
                imgSrc: "images/tpro-01-principles.jpg"
            },
            {
                heading: "Types of Accounts (The Golden Rules)",
                text: `To record any transaction accurately, you MUST memorize the Three Golden Rules of Accounting:<br><br>
                <strong>1. Real Account (Assets & Properties):</strong> Tangible things like Cash, Furniture, Computers.<br>
                👉 <em>Rule: Debit what comes in, Credit what goes out.</em><br><br>
                <strong>2. Personal Account (People & Companies):</strong> Names of individuals, bank accounts, suppliers (e.g., SBI Bank, Rahul Traders).<br>
                👉 <em>Rule: Debit the receiver, Credit the giver.</em><br><br>
                <strong>3. Nominal Account (Expenses & Incomes):</strong> Rent, Salary, Sales, and Commission.<br>
                👉 <em>Rule: Debit all expenses and losses, Credit all incomes and gains.</em>
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 5 & 6: The Golden Rules</h4>
                    <strong>📖 Theory:</strong> Memorize the rules for Real, Personal, and Nominal accounts.<br>
                    <strong>💻 Practical:</strong> Categorize 50 different ledger names (e.g., Machinery, Rent, SBI Bank) into Real, Personal, or Nominal accounts.
                </div>`,
                shortcut: "Memorizing the Golden Rules is the absolute foundation of passing any accounting interview.",
                imgSrc: "images/tpro-02-golden-rules.jpg"
            },
            {
                heading: "Double Entry System & Journal Entries",
                text: `The Double Entry System means every transaction has two opposite effects: a Debit (Dr) and a Credit (Cr).<br><br>
                <strong>Example 1 (Starting Business):</strong> You start a business with ₹1,00,000 Cash.<br>
                - Cash Account (Real A/c) comes in 👉 Dr. 1,00,000<br>
                - Capital Account (Personal A/c) gives 👉 Cr. 1,00,000
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 7, 8 & 9: Journalizing Transactions</h4>
                    <strong>📖 Theory:</strong> Learn how to format a standard Journal Entry book with Date, Particulars, L.F., Debit, and Credit columns.<br>
                    <strong>💻 Practical:</strong> Solve a full month of hypothetical business transactions (20 entries) and pass manual journal entries for them.
                </div>`,
                shortcut: "Debit (Dr.) and Credit (Cr.) must ALWAYS equal exactly the same amount.",
                imgSrc: "images/tpro-03-double-entry.jpg"
            },
            {
                heading: "Ledger Posting, Trial Balance and Final Accounts",
                text: `<strong>1. Ledger Posting:</strong> Transferring journal entries to individual account diaries.<br>
                <strong>2. Trial Balance:</strong> A summary sheet listing closing balances to check if total Debits equal total Credits.<br>
                <strong>3. Final Accounts:</strong> Prepared at year-end. Includes Trading A/c, Profit & Loss A/c, and Balance Sheet.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 10, 11 & 12: Manual Final Accounts</h4>
                    <strong>📖 Theory:</strong> Understand the flow from Journal -> Ledger -> Trial Balance -> P&L -> Balance Sheet.<br>
                    <strong>💻 Practical:</strong> Take the 20 journal entries from Day 9, post them to manual T-shaped ledgers, extract a Trial Balance, and build a manual Balance Sheet to ensure it tallies.
                </div>`,
                shortcut: "In Tally Prime, you only do Voucher Entries. Tally instantly builds the Ledgers, Trial Balance, and Final Accounts automatically!",
                imgSrc: "images/tpro-04-final-accounts.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Module 2: Basics of Tally Prime 7.0 (Month 1)",
        topics: [
            {
                heading: "Overview of Tally ERP & Tally Prime",
                text: `Tally ERP 9 was the older, blue-screen standard. Tally Prime 7.0 is the modern, color-optimized successor. Prime 7.0 manages GST compliance, e-Invoicing, and audit trails automatically to meet modern government regulations.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 13 & 14: Software Evolution & Installation</h4>
                    <strong>📖 Theory:</strong> Learn the history of Tally versions and the difference between ERP 9 and Prime 7.0.<br>
                    <strong>💻 Practical:</strong> Download the setup file from tallysolutions.com, install Tally Prime 7.0 on the lab computers, and open Educational Mode.
                </div>`,
                shortcut: "Tally Prime is designed to be fully operated using a keyboard. Using a mouse slows down a professional accountant.",
                imgSrc: "images/tpro-05-overview.jpg"
            },
            {
                heading: "Understanding Gateway of Tally & Navigation",
                text: `The <strong>Gateway of Tally</strong> is your central steering wheel divided into Masters, Transactions, Utilities, and Reports. The <strong>Top Menu Bar</strong> contains universal commands: Company (Alt+K), Data (Alt+Y), and Go To (Alt+G).
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 15, 16 & 17: UI Walkthrough & Shortcuts</h4>
                    <strong>📖 Theory:</strong> Memorize universal shortcuts: Alt+G (Go To), Ctrl+A (Save), F12 (Configure), Esc (Back).<br>
                    <strong>💻 Practical:</strong> Navigate completely through Tally Prime for 30 minutes without touching the mouse once. Practice opening and closing reports using Alt+G.
                </div>`,
                shortcut: "If you cannot find a specific option on a screen, press F12! It is likely hidden in the configuration menu.",
                imgSrc: "images/tpro-06-interface.jpg"
            },
            {
                heading: "Creating, Altering, Deleting Company",
                text: `Press <strong>Alt+K</strong> (Company Menu) and select <strong>Create</strong>. Enter the Company Name, Address, and State. 
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 18 to 22: Company Management & Data Paths</h4>
                    <strong>📖 Theory:</strong> Understand Financial Year vs Books Beginning From. Learn about Tally Data Paths (C:/Users/Public/TallyPrime/Data).<br>
                    <strong>💻 Practical:</strong> Create 3 different companies. Alter the address of one. Delete the second one permanently using Alt+D. Change the default data save location in Data settings.
                </div>`,
                shortcut: "Alt + D is the universal 'Delete' command in Tally for companies, ledgers, and vouchers.",
                imgSrc: "images/tpro-07-company.jpg"
            },
            {
                heading: "Security Control & Backup Basics",
                text: `Financial data is confidential. Tally allows Admin passwords and data backups to Pendrives.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 23 to 25: Security & Backups</h4>
                    <strong>📖 Theory:</strong> Learn why backups are necessary and how Tally encrypts data with Admin passwords.<br>
                    <strong>💻 Practical:</strong> Enable 'Control User Access' in a test company. Set an Admin password. Next, take a Backup (Alt+Y) of the company to a USB drive, and Restore it back to the computer.
                </div>`,
                shortcut: "Alt + Y opens the Data Menu for Backup and Restore.",
                imgSrc: "images/tpro-08-gateway.jpg"
            }
        ]
    },

    // ==========================================
    // MONTH 2: MASTERS & BASIC VOUCHERS
    // ==========================================
    {
        id: "chapter3",
        title: "Module 3: Company Creation & Ledger Management (Month 2)",
        topics: [
            {
                heading: "Company Configuration Options (F11)",
                text: `The F11 Features screen defines business operations: Accounting, Inventory, Taxation, and Payroll.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 26 & 27: F11 Features Deep Dive</h4>
                    <strong>📖 Theory:</strong> Understand the difference between maintaining Accounts only vs integrating with Inventory.<br>
                    <strong>💻 Practical:</strong> Create a new trading company. Open F11 and toggle inventory, GST, and multiple godowns on/off. Observe how the Gateway menu changes based on F11 selections.
                </div>`,
                shortcut: "Press F11 from anywhere in Tally to open the Features menu.",
                imgSrc: "images/tpro-10-f11.jpg"
            },
            {
                heading: "Understanding Group Hierarchy",
                text: `Tally operates on a strict Group Hierarchy. 28 Pre-defined Groups. Putting a ledger in the wrong group will completely ruin the Balance Sheet.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 28, 29 & 30: Mastering Groups</h4>
                    <strong>📖 Theory:</strong> Deep dive into Sundry Debtors, Creditors, Fixed Assets, Indirect Expenses, and Duties & Taxes.<br>
                    <strong>💻 Practical:</strong> Open Chart of Accounts > Groups. Expand the tree. Write down 5 ledgers that belong in 'Indirect Expenses' and 5 in 'Direct Expenses'.
                </div>`,
                shortcut: "Gateway of Tally > Chart of Accounts > Groups.",
                imgSrc: "images/tpro-11-groups.jpg"
            },
            {
                heading: "Creating Ledgers (Single & Multiple)",
                text: `Go to <strong>Gateway of Tally > Create > Ledger</strong>. Tally automatically provides 'Cash' and 'Profit & Loss A/c'.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 31 to 35: Ledger Creation Speed Drills</h4>
                    <strong>📖 Theory:</strong> Learn Single Ledger creation vs Multi-Master Ledger creation.<br>
                    <strong>💻 Practical:</strong> Create 50 common business ledgers (Rent, Salary, Machinery, HDFC Bank, Customer A, Supplier B) in under 15 minutes using Chart of Accounts > Multi Masters (Alt+H) > Multi Create.
                </div>`,
                shortcut: "Alt+H from Chart of Accounts enables hyper-fast multi-ledger creation.",
                imgSrc: "images/tpro-12-ledgers.jpg"
            },
            {
                heading: "Assigning Opening Balances & Bill-wise Details",
                text: `When migrating an old business to Tally, you must enter their current financial position as 'Opening Balances'.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 36 to 40: Opening Balances & Bill Adjustments</h4>
                    <strong>📖 Theory:</strong> Understand Debit (Dr) vs Credit (Cr) for Opening Balances. Learn about 'Maintain balances bill-by-bill' for tracking outstanding payments.<br>
                    <strong>💻 Practical:</strong> Enter opening balances for Assets (10L), Liabilities (5L), and Capital (5L). For Sundry Debtors, enter opening balances and split them into multiple Pending Bills (e.g., Bill 001, Bill 002). Ensure the Balance Sheet tallies with zero 'Difference in Opening Balances'.
                </div>`,
                shortcut: "A mismatch in Dr/Cr opening balances creates a 'Difference in Opening Balances' error in the Balance Sheet.",
                imgSrc: "images/tpro-13-opening-bal.jpg"
            },
            {
                heading: "Advanced: Cost Centres",
                text: `Cost Centres allow tracking expenses across different departments (e.g., Marketing vs HR) without creating 50 different expense ledgers.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 41 to 45: Cost Centres Setup</h4>
                    <strong>📖 Theory:</strong> Enable Cost Centres in F11. Understand how to allocate one 'Salary' ledger across 3 different departments.<br>
                    <strong>💻 Practical:</strong> Create Cost Categories (Branches) and Cost Centres (Departments). Pass a salary payment of ₹1,00,000 and allocate 40% to Sales, 30% to IT, and 30% to Admin. View the Cost Centre Breakup report.
                </div>`,
                shortcut: "F11 > Enable Cost Centres.",
                imgSrc: "images/tpro-13-opening-bal.jpg"
            }
        ]
    },

    // ==========================================
    // MONTH 3: ADVANCED VOUCHER ENTRIES
    // ==========================================
    {
        id: "chapter4",
        title: "Module 4: Voucher Entry in Tally (Month 3)",
        topics: [
            {
                heading: "Contra (F4), Payment (F5), Receipt (F6)",
                text: `<strong>Contra:</strong> Internal cash/bank transfers.<br><strong>Payment:</strong> Money going OUT.<br><strong>Receipt:</strong> Money coming IN.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 46 to 52: Cash Flow Scenarios</h4>
                    <strong>📖 Theory:</strong> Analyze complex multi-ledger payment and receipt scenarios (e.g., receiving cash and cheque together).<br>
                    <strong>💻 Practical:</strong> Process 20 Payment vouchers (Rent, Electricity, Vendor payments), 15 Receipt vouchers (Capital intro, Customer payments), and 10 Contra vouchers (ATM withdrawals, Cash deposits). Check the Cash/Bank ledger closing balances.
                </div>`,
                shortcut: "F4 = Internal | F5 = Out | F6 = In",
                imgSrc: "images/tpro-14-contra.jpg"
            },
            {
                heading: "Journal Voucher (F7) & Adjustments",
                text: `The Journal is for non-cash transactions like fixed asset credit purchases, outstanding expenses, and depreciation.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 53 to 60: The Adjustment Masterclass</h4>
                    <strong>📖 Theory:</strong> Why do we need Journal Vouchers? Learn about Depreciation, Outstanding Salary, and Prepaid Insurance.<br>
                    <strong>💻 Practical:</strong> Pass Journal entries to record: 1. Buying ₹50k Furniture from IKEA on credit. 2. Charging 10% depreciation at year-end. 3. Recording ₹10k unpaid salary as a liability. Check the Balance Sheet to ensure liabilities reflect correctly.
                </div>`,
                shortcut: "F7 = Non-Cash Adjustments and Credit Purchases of Assets.",
                imgSrc: "images/tpro-16-journal.jpg"
            },
            {
                heading: "Sales (F8) & Purchase (F9) Vouchers",
                text: `These vouchers are exclusively for trading stock/inventory.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 61 to 65: Trading & Invoicing</h4>
                    <strong>📖 Theory:</strong> Item Invoice Mode vs Accounting Invoice Mode. How trade discounts differ from cash discounts.<br>
                    <strong>💻 Practical:</strong> Purchase 500 units of stock. Sell 250 units to 5 different customers. Configure F12 to add a 'Discount Column' in invoices and provide a 5% discount on the sales.
                </div>`,
                shortcut: "Press Ctrl+H (Change Mode) in F8/F9 to switch between Invoice and Voucher modes.",
                imgSrc: "images/tpro-17-sales-purchase.jpg"
            },
            {
                heading: "Credit Note (Alt+F6) & Debit Note (Alt+F5)",
                text: `<strong>Debit Note:</strong> Purchase Return (returning goods to supplier).<br><strong>Credit Note:</strong> Sales Return (customer returning goods to you).
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 66 to 70: Handling Returns</h4>
                    <strong>📖 Theory:</strong> Understand the impact of returns on Stock Summary and Party Outstanding balances.<br>
                    <strong>💻 Practical:</strong> Process 5 Debit Notes for damaged purchases. Process 3 Credit Notes for customer returns. Verify that the inventory count increases/decreases appropriately in the Stock Summary.
                </div>`,
                shortcut: "Press F10 (Other Vouchers) if you forget the shortcuts for Debit/Credit Notes.",
                imgSrc: "images/tpro-18-notes.jpg"
            },
            {
                heading: "Optional & Post-Dated Vouchers",
                text: `Sometimes you need to issue a pro-forma invoice (quotation) or record a cheque dated for next month.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 71 to 75: Advanced Voucher Types</h4>
                    <strong>📖 Theory:</strong> What is an Optional Voucher? How does Post-Dated (PDC) affect books?<br>
                    <strong>💻 Practical:</strong> Create an Optional Sales Voucher (Quotation) and verify it does NOT affect the P&L. Enter a Post-Dated Payment cheque for the 30th of next month and view the PDC Summary Report.
                </div>`,
                shortcut: "Ctrl+L makes a voucher Optional. Ctrl+T makes a voucher Post-Dated.",
                imgSrc: "images/tpro-19-daybook.jpg"
            }
        ]
    },

    // ==========================================
    // MONTH 4: INVENTORY & ORDER PROCESSING
    // ==========================================
    {
        id: "chapter5",
        title: "Module 5: Inventory Management (Month 4)",
        topics: [
            {
                heading: "Units, Compound Units & Alternate Units",
                text: `Tally must know how you count your goods (Simple vs Compound).
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 76 to 80: Deep Inventory Counting</h4>
                    <strong>📖 Theory:</strong> Simple Units (PCS) vs Compound Units (Box of 10 PCS) vs Alternate Units (Buying in KGs, selling in Grams).<br>
                    <strong>💻 Practical:</strong> Create a compound unit for 'Dozen of 12 PCS'. Create an item with Alternate Units. Purchase 5 Dozens and sell 14 PCS. Ensure Tally tracks the remaining stock perfectly.
                </div>`,
                shortcut: "Gateway > Create > Unit.",
                imgSrc: "images/tpro-20-units.jpg"
            },
            {
                heading: "Godowns & Inter-Godown Transfers",
                text: `If you store goods in multiple physical locations, you need Godowns.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 81 to 85: Multi-Location Management</h4>
                    <strong>📖 Theory:</strong> Logistics of keeping Main Shop vs Warehouse separate.<br>
                    <strong>💻 Practical:</strong> Create 3 Godowns. Purchase 1000 items into the 'Main Warehouse'. Pass a 'Stock Journal' (Alt+F7) to transfer 200 items from the Warehouse to the 'Retail Shop'. View Godown Summary.
                </div>`,
                shortcut: "Alt+F7 (Stock Journal) is used to physically move stock from one Godown to another.",
                imgSrc: "images/tpro-22-godowns.jpg"
            },
            {
                heading: "Order Processing (PO/SO) & Delivery Notes",
                text: `Before a sale or purchase happens, companies send Orders and Delivery Challans.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 86 to 92: Order to Invoice Cycle</h4>
                    <strong>📖 Theory:</strong> The 3-step cycle: Purchase Order -> Receipt Note (GRN) -> Purchase Invoice.<br>
                    <strong>💻 Practical:</strong> Enable Order Processing in F11. 1. Generate a Purchase Order for 500 items. 2. Pass a Receipt Note (Alt+F9) when the truck arrives. 3. Pass a Purchase Invoice linking it to the Receipt Note. Track the Order Outstanding report.
                </div>`,
                shortcut: "Ctrl+F9 = Purchase Order | Alt+F9 = Receipt Note (Goods arriving without bill).",
                imgSrc: "images/tpro-23-opening-stock.jpg"
            },
            {
                heading: "Bill of Materials (BOM) & Manufacturing",
                text: `Tally can assemble raw materials into finished goods.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 93 to 100: Manufacturing Journal & Reorder Levels</h4>
                    <strong>📖 Theory:</strong> What is a BOM? How to configure Reorder Levels so Tally warns you when stock is low.<br>
                    <strong>💻 Practical:</strong> Create a BOM for a 'Desktop PC' (Requires 1 Monitor, 1 CPU, 1 Keyboard). Purchase the raw materials. Pass a Manufacturing Journal (Alt+F7 > Type: Manufacturing) to produce 10 Desktop PCs. Verify that raw materials decrease and finished goods increase. Set a Reorder Level of 5 for PCs.
                </div>`,
                shortcut: "Press F12 in Stock Item creation to enable Bill of Materials (BOM).",
                imgSrc: "images/tpro-24-stock-summary.jpg"
            }
        ]
    },

    // ==========================================
    // MONTH 5: TAXATION (GST, TDS, TCS)
    // ==========================================
    {
        id: "chapter6",
        title: "Module 6: Taxation (GST, TDS, TCS) (Month 5)",
        topics: [
            {
                heading: "Enabling GST & Creating Tax Ledgers",
                text: `Press F11 (Features) to enable GST. Configure State, Registration Type, and GSTIN.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 101 to 105: GST Architecture in Tally</h4>
                    <strong>📖 Theory:</strong> CGST vs SGST vs IGST. HSN/SAC codes and rate setup at Company level vs Item level.<br>
                    <strong>💻 Practical:</strong> Enable GST. Create CGST, SGST, IGST ledgers. Create 5 stock items, embedding 5%, 12%, 18%, and 28% GST rates into their ledgers using accurate HSN codes.
                </div>`,
                shortcut: "Never hard-code the tax rate (like 'CGST 9%') into the ledger. Keep it generic ('CGST').",
                imgSrc: "images/tpro-25-enable-tax.jpg"
            },
            {
                heading: "GST Sales & Purchase (Local, Interstate, Nil Rated)",
                text: `Tally automates tax calculations based on the customer's state.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 106 to 110: Multi-State GST Billing</h4>
                    <strong>📖 Theory:</strong> B2B vs B2C transactions. Exempt vs Nil Rated goods.<br>
                    <strong>💻 Practical:</strong> Pass 10 Local Sales (charging CGST/SGST). Pass 10 Interstate Sales to Delhi (charging IGST). Pass entries for Exempt items (Books/Vegetables). Press Ctrl+O > GST Tax Analysis to ensure tax calculates perfectly.
                </div>`,
                shortcut: "Ctrl+O > GST Tax Analysis reveals exactly how Tally calculated the tax amount.",
                imgSrc: "images/tpro-27-gst-entries.jpg"
            },
            {
                heading: "Advanced GST: RCM, E-Way Bill & GSTR Returns",
                text: `Tally automatically drafts government tax returns (GSTR-1, GSTR-3B).
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 111 to 115: E-Way Bills & Return Filing</h4>
                    <strong>📖 Theory:</strong> What is Reverse Charge Mechanism (RCM) for transporters? When is an E-Way bill mandatory (₹50k+ limit)?<br>
                    <strong>💻 Practical:</strong> Pass a sale above ₹50,000 and fill in the E-Way bill sub-form in Tally. Open GSTR-1 and GSTR-3B reports. Clear any 'Uncertain Transactions' (errors). Export the GSTR-1 as a JSON file.
                </div>`,
                shortcut: "Alt + G > type 'GSTR-1' or 'GSTR-3B'.",
                imgSrc: "images/tpro-28-gstr-returns.jpg"
            },
            {
                heading: "TDS & TCS Deductions",
                text: `TDS (Tax Deducted at Source) and TCS (Tax Collected at Source).
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 116 to 125: Direct Tax Deductions</h4>
                    <strong>📖 Theory:</strong> Understand TDS on Rent, Professional Fees, and Commission. Understand TCS on Scrap and high-value cars.<br>
                    <strong>💻 Practical:</strong> Enable TDS. Create Nature of Payment (Sec 194J @ 10%). Pass a Journal voucher receiving an Audit bill of ₹1,00,000 and deduct ₹10,000 TDS automatically. Pay the net amount to the Auditor, and pay the TDS to the Government using Stat Payment (Ctrl+F in Payment Voucher).
                </div>`,
                shortcut: "TDS is almost always deducted via a Journal Entry before the actual payment is made.",
                imgSrc: "images/tpro-29-tds-entries.jpg"
            }
        ]
    },

    // ==========================================
    // MONTH 6: PAYROLL, BANKING & CAPSTONE
    // ==========================================
    {
        id: "chapter7",
        title: "Module 7: Payroll & Employee Records (Month 6)",
        topics: [
            {
                heading: "Payroll Setup & Pay Heads",
                text: `Payroll manages employee salaries, PF, and Attendance.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 126 to 132: Complex Salary Structures</h4>
                    <strong>📖 Theory:</strong> Earnings (Basic, HRA) vs Deductions (PF, ESI, TDS).<br>
                    <strong>💻 Practical:</strong> Enable Payroll. Create Employee Groups (Admin, IT). Create 5 Employees. Create Pay Heads for Basic, DA, HRA, and PF (Computed at 12%). Map these to the employees using 'Define Salary Details'.
                </div>`,
                shortcut: "Gateway > Create > Show More (To reveal all Payroll master options).",
                imgSrc: "images/tpro-33-pay-heads.jpg"
            },
            {
                heading: "Processing Payroll & Payslips",
                text: `Tally can process salaries for 100 employees in 2 seconds using Autofill.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 133 to 135: Automated Salary Disbursal</h4>
                    <strong>📖 Theory:</strong> The 3-step payroll flow: Attendance -> Payroll Autofill -> Payment.<br>
                    <strong>💻 Practical:</strong> Pass an Attendance voucher marking employees present for 28 days and 20 hours Overtime. Open a Payroll Voucher, press Ctrl+F (Autofill), and let Tally generate the full salary sheet. Print the final Payslips.
                </div>`,
                shortcut: "Ctrl + F (Payroll Autofill) is the most powerful button in the payroll system.",
                imgSrc: "images/tpro-34-payroll-process.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Module 8: Banking Features (Month 6)",
        topics: [
            {
                heading: "Bank Reconciliation Statement (BRS) & Cheques",
                text: `Your Tally bank balance rarely matches your real Passbook immediately due to un-cleared cheques.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 136 to 140: BRS & Banking Automation</h4>
                    <strong>📖 Theory:</strong> Why BRS is required. How to manage Post-Dated Cheques and Overdrafts.<br>
                    <strong>💻 Practical:</strong> Pass 5 bank payments. Open Bank Ledger, press Alt+R (Reconcile), and enter actual clearing dates to match the physical passbook. Configure Cheque Printing for HDFC Bank and print a sample cheque on plain paper. Generate a Deposit Slip.
                </div>`,
                shortcut: "Alt + R (From the Bank Ledger screen to open Reconciliation).",
                imgSrc: "images/tpro-35-brs.jpg"
            }
        ]
    },
    {
        id: "chapter9",
        title: "Module 9: Capstone Projects (Final Week)",
        topics: [
            {
                heading: "Final Audits & Real-World Projects",
                text: `The final test of your 6 months of training. Bring together Ledgers, Vouchers, Inventory, GST, and Payroll.
                
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 15px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 141 to 145: The Mega Trading Cycle</h4>
                    <strong>💻 Practical Project 1:</strong> Build 'Tech World Ltd' from scratch. Invest 20L Capital. Setup Godowns. Buy 500 Laptops across 3 state borders (IGST). Sell 400 Laptops locally with Discounts and E-Way bills. Pass 10 Contra and Payment entries. Prove your final Net Profit and ensure the Balance Sheet tallies.
                </div>
                <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0f766e; margin-top: 10px; border-radius: 6px;">
                    <h4 style="margin:0 0 10px 0; color:#0f766e;">📅 Day 146 to 150: The Service & Audit Challenge</h4>
                    <strong>💻 Practical Project 2:</strong> Setup a purely service-based IT firm. Create Cost Centres for App Dev and Web Dev. Receive an Audit bill, deduct TDS, and pay the Government. Setup full Payroll for 10 employees, mark variable attendance, process salaries, and print Payslips. Take a final Backup of your data to submit to the instructor.
                </div>`,
                shortcut: "Save your data backup (Alt+Y) in your secure student folder after completing the projects to receive your certificate.",
                imgSrc: "images/tpro-39-project1.jpg"
            }
        ]
    }
];
