// tally-pro-data.js
// Excellent Institute - Advanced Tally Prime 7.0 & Accounting Professional Course (150-Day Syllabus)

const tallyProBookData = [
    // ==========================================
    // MODULE 1: INTRODUCTION TO ACCOUNTING (Month 1)
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
                2. <strong>Going Concern:</strong> We assume the business will run forever. This is why we record long-term assets (like land) at their original cost.<br>
                3. <strong>Accrual Concept:</strong> Incomes and expenses are recorded when they occur, not when the cash is actually exchanged. If rent is due for March, it is recorded in March, even if paid in April.<br>
                4. <strong>Dual Aspect (The Accounting Equation):</strong> Assets = Liabilities + Owner's Equity (Capital). Every transaction affects both sides equally.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 1 to Day 5</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Write down 20 real-world business scenarios in a notebook. Identify which accounting principle (Accrual, Entity, or Dual Aspect) applies to each scenario.
                </div>`,
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
                👉 <em>Rule: Debit all expenses and losses, Credit all incomes and gains.</em>
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 6 to Day 10</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Teacher provides a list of 50 ledger names (e.g., Machinery, Wages, HDFC Bank). Students must manually classify them into Real, Personal, or Nominal accounts in their notebooks.
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
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 11 to Day 15</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Pass 30 manual journal entries in a notebook (no computers yet). Ensure Debits equal Credits for every single entry.
                </div>`,
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
                - <em>Balance Sheet:</em> A snapshot of Assets and Liabilities.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 16 to Day 20</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Take the 30 journal entries from last week, post them into manual T-shape Ledgers on paper, and extract a manual Trial Balance.
                </div>`,
                shortcut: "In Tally Prime, you only do Voucher Entries. Tally instantly builds the Ledgers, Trial Balance, and Final Accounts automatically!",
                imgSrc: "images/tpro-04-final-accounts.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 2: BASICS OF TALLY PRIME 7.0 (Month 2)
    // ==========================================
    {
        id: "chapter2",
        title: "Module 2: Basics of Tally Prime (Month 2)",
        topics: [
            {
                heading: "Overview of Tally ERP & Tally Prime",
                text: `Tally ERP 9 was the older, blue-screen standard. Tally Prime 7.0 is the modern, color-optimized successor. Tally Prime introduces a much cleaner interface, the powerful 'Go To' search bar, and seamless multitasking. Under the hood, Prime 7.0 manages GST compliance, e-Invoicing, and audit trails automatically to meet modern government regulations.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 21 to Day 23</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Download the setup file from TallySolutions.com and install Tally Prime 7.0 in Educational Mode on the lab computers.
                </div>`,
                shortcut: "Tally Prime is designed to be fully operated using a keyboard. Using a mouse slows down a professional accountant.",
                imgSrc: "images/tpro-05-overview.jpg"
            },
            {
                heading: "Installation and Interface Walkthrough",
                text: `Once installed, open the software. Click <strong>'Continue in Educational Mode'</strong>. <br><br>
                <strong>The Top Menu Bar:</strong> This is a new feature in Prime. It contains universal commands: Company (Alt+K), Data (Alt+Y), Exchange (Alt+Z), Go To (Alt+G), Import (Alt+O), Export (Alt+E), Email (Alt+M), Print (Alt+P), and Help (F1). These top menus can be accessed from any screen inside the software.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 24 to Day 25</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Memorize the Top Menu. Open 5 different top menu dropdowns using only the Alt+Letter combinations on the keyboard.
                </div>`,
                shortcut: "Educational Mode works exactly like the paid version, but restricts date entry to the 1st, 2nd, and 31st of the month.",
                imgSrc: "images/tpro-06-interface.jpg"
            },
            {
                heading: "Creating, Altering, Deleting Company",
                text: `Press <strong>Alt+K</strong> (Company Menu) and select <strong>Create</strong>. Enter the Company Name, Mailing Address, and select the State. <em>(Selecting the correct state is vital for accurate GST calculations)</em>. The Financial Year typically starts on 1st April.<br><br>
                <strong>Altering:</strong> Press Alt+K > Alter to fix spelling mistakes.<br>
                <strong>Deleting:</strong> Go to the Alter screen and press <strong>Alt+D</strong>. A warning will appear. Press 'Y' to permanently destroy the company and all its data.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 26 to Day 28</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Create 3 mock companies with different financial years. Alter the address of one, and permanently delete another.
                </div>`,
                shortcut: "Alt + D is the universal 'Delete' command in Tally for companies, ledgers, and vouchers.",
                imgSrc: "images/tpro-07-company.jpg"
            },
            {
                heading: "Gateway of Tally & Navigation Shortcuts",
                text: `The <strong>Gateway of Tally</strong> is your central steering wheel. It is divided into four main blocks:<br>
                1. <strong>Masters:</strong> Create and Alter.<br>
                2. <strong>Transactions:</strong> Vouchers and Day Book.<br>
                3. <strong>Utilities:</strong> Banking.<br>
                4. <strong>Reports:</strong> Balance Sheet, P&L A/c.<br><br>
                <strong>Vital Shortcuts:</strong><br>
                - <strong>Alt + G (Go To):</strong> The magic search bar. Jump to any report without closing your current work.<br>
                - <strong>Ctrl + A:</strong> Instantly accept and save any screen without pressing 'Enter' 20 times.<br>
                - <strong>F12 (Configure):</strong> Opens hidden settings on your current screen.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 29 to Day 35</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Practice multitasking. Open a Voucher, press Alt+G, search for 'Balance Sheet', view it, and press Escape to return to the voucher without losing data.
                </div>`,
                shortcut: "If you cannot find a specific option on a screen, press F12! It is likely hidden in the configuration menu.",
                imgSrc: "images/tpro-08-gateway.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 3: COMPANY CREATION & LEDGER MGMT (Month 2-3)
    // ==========================================
    {
        id: "chapter3",
        title: "Module 3: Ledger Management & Balances",
        topics: [
            {
                heading: "Company Configuration Options (F11)",
                text: `As soon as you create and save a company, the F11 Features screen appears. Here you define the business operations.<br>
                - <strong>Accounting:</strong> Set 'Maintain Accounts' to Yes.<br>
                - <strong>Inventory:</strong> If it is a product-selling shop, set 'Maintain Inventory' to Yes, and 'Integrate Accounts with Inventory' to Yes.<br>
                - <strong>Taxation:</strong> Enable GST, TDS, or TCS if applicable.<br>
                - <strong>Payroll:</strong> Enable if you plan to manage employee salaries through Tally.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 36 to Day 38</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Open F11 and configure the features for a purely Service-based company (Inventory OFF) vs a Trading company (Inventory ON).
                </div>`,
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
                - <em>Duties & Taxes:</em> All GST, TDS, and Tax ledgers.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 39 to Day 42</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Map 40 different business ledgers to their correct Tally Groups on paper, then navigate to Chart of Accounts > Groups to verify the tree structure.
                </div>`,
                shortcut: "Gateway of Tally > Chart of Accounts > Groups (To view the entire tree structure).",
                imgSrc: "images/tpro-11-groups.jpg"
            },
            {
                heading: "Creating Ledgers (Cash, Bank, Sales, Purchase)",
                text: `Go to <strong>Gateway of Tally > Create > Ledger</strong>.<br>
                - Type 'Sales A/c' and put it under 'Sales Accounts'.<br>
                - Type 'Purchase A/c' and put it under 'Purchase Accounts'.<br>
                - Type 'SBI Bank' and put it under 'Bank Accounts'. Provide the A/c number and IFSC code for e-Banking.<br>
                - Create a Customer Name and put them under 'Sundry Debtors'. Provide their Mailing Address and State (crucial for GST).
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 43 to Day 46</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Create 25 ledgers covering Capital, Banks, Expenses, Debtors, and Creditors using the 'Multi Masters' (Alt+H) rapid creation tool.
                </div>`,
                shortcut: "Tally automatically provides two ledgers for free: 'Cash' and 'Profit & Loss A/c'. Do not try to create them again.",
                imgSrc: "images/tpro-12-ledgers.jpg"
            },
            {
                heading: "Opening Balances & Bill-wise Details",
                text: `If you are switching an existing business to Tally, you must enter their current financial position as 'Opening Balances'.<br><br>
                Go to <strong>Alter > Ledger</strong>. Select the 'Cash' ledger, and at the bottom, type the exact cash available in the shop today. Ensure Tally marks Assets as 'Dr' (Debit) and Liabilities/Capital as 'Cr' (Credit). A mismatch here creates a 'Difference in Opening Balances' error.<br><br>
                <strong>Bill-wise Details:</strong> When entering opening balances for Debtors/Creditors, Tally will ask you to break down the total pending amount bill-by-bill (e.g., Bill 01 for ₹5000, Bill 02 for ₹3000) so you can track exact payments later.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 47 to Day 50</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Enter opening balances for 10 ledgers. Break down a Creditor's ₹10,000 opening balance into 3 separate previous-year pending bills.
                </div>`,
                shortcut: "Enable 'Maintain balances bill-by-bill' in F11 to unlock outstanding tracking.",
                imgSrc: "images/tpro-13-opening-bal.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 4: VOUCHER ENTRY IN TALLY (Month 3)
    // ==========================================
    {
        id: "chapter4",
        title: "Module 4: Voucher Entries & Tracking (Month 3)",
        topics: [
            {
                heading: "Payment (F5) and Receipt (F6) Vouchers",
                text: `<strong>Payment Voucher (F5):</strong> Used strictly when money is going OUT of the business. You use it to pay Suppliers (Creditors), pay office rent, pay salaries, or purchase fixed assets for cash.<br><br>
                <strong>Receipt Voucher (F6):</strong> Used strictly when money is coming INTO the business. You use it when the owner brings in Capital, when you receive a loan, or when a Customer (Debtor) pays their outstanding bill.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 51 to Day 55</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Record 15 Capital/Loan receipts, and 20 daily expense payments via Cash and Bank.
                </div>`,
                shortcut: "F5 = Money Out | F6 = Money In.",
                imgSrc: "images/tpro-15-payment-receipt.jpg"
            },
            {
                heading: "Contra (F4) and Journal (F7)",
                text: `<strong>Contra (F4):</strong> Used ONLY for internal money transfers. Cash deposited to Bank, Cash withdrawn from Bank, or Bank-to-Bank transfers. No third party is involved.<br>
                <strong>Journal (F7):</strong> The adjustment voucher. Used for non-cash transactions like buying machinery on credit, or recording depreciation.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 56 to Day 60</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Record 10 ATM withdrawals/deposits, and 5 depreciation/adjustment entries at year-end.
                </div>`,
                shortcut: "F4 = Internal Cash/Bank movement ONLY.",
                imgSrc: "images/tpro-14-contra.jpg"
            },
            {
                heading: "Sales (F8) & Purchase (F9) Vouchers",
                text: `These vouchers are exclusively for trading stock/inventory.<br>
                <strong>Purchase (F9):</strong> Used when buying goods from a supplier to resell. Enter the Supplier Invoice No, select the Party A/c, select Purchase A/c, and list the items and quantities.<br>
                <strong>Sales (F8):</strong> Used when selling goods to a customer. Select the Party A/c, Sales A/c, and list the items. Tally will automatically calculate the subtotal.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 61 to Day 65</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Enter 20 standard purchase invoices and 25 sales invoices using 'Item Invoice' mode.
                </div>`,
                shortcut: "Press Ctrl+H (Change Mode) in F8/F9 to switch between 'Item Invoice' (for inventory) and 'As Voucher' (for manual Dr/Cr entries).",
                imgSrc: "images/tpro-17-sales-purchase.jpg"
            },
            {
                heading: "Credit Note (Alt+F6) & Debit Note (Alt+F5)",
                text: `These are used for Returns and Price Adjustments.<br>
                <strong>Debit Note (Alt+F5):</strong> Purchase Return. You bought 10 laptops, but 2 are broken. You pass a Debit Note to return them to the supplier and reduce your liability.<br>
                <strong>Credit Note (Alt+F6):</strong> Sales Return. A customer returns damaged goods back to you. You pass a Credit Note to receive the stock back and reduce the customer's outstanding balance.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 66 to Day 70</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Process 5 purchase returns and 5 sales returns, tracking them against their original invoice numbers.
                </div>`,
                shortcut: "Press F10 (Other Vouchers) if you forget the shortcuts for Debit/Credit Notes.",
                imgSrc: "images/tpro-18-notes.jpg"
            },
            {
                heading: "Cost Centres & Day Book Overview",
                text: `<strong>Cost Centres:</strong> Used to track department-wise expenses. If you pay ₹10,000 Rent, you can use Cost Centres to allocate ₹6,000 to the 'Sales Dept' and ₹4,000 to 'Admin Dept' inside the same voucher. (Enable via F11).<br><br>
                <strong>Day Book:</strong> The Day Book (Gateway > Day Book) acts as your daily ledger log. It lists every single voucher entered on the current date. Press Alt+F2 to change dates.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 71 to Day 75</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Create Cost Centres for 3 departments. Allocate a bulk Salary payment across the 3 departments. Use the Day Book to alter and delete old entries.
                </div>`,
                shortcut: "Press Alt+X to 'Cancel' a voucher in the Day Book. This keeps the voucher number intact but voids the amount for audit purposes.",
                imgSrc: "images/tpro-19-daybook.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 5: INVENTORY MANAGEMENT (Month 4)
    // ==========================================
    {
        id: "chapter5",
        title: "Module 5: Inventory & Order Processing (Month 4)",
        topics: [
            {
                heading: "Units of Measure (Simple & Compound)",
                text: `Tally must know how you count your goods. Go to <strong>Create > Unit</strong>.<br>
                <strong>Simple Units:</strong> Create a Symbol (PCS) and Formal Name (Pieces). You MUST select the official UQC (Unique Quantity Code) as 'NOS-NUMBERS' for GST filing.<br>
                <strong>Compound Units:</strong> Press Backspace on the Unit Creation screen and change the Type to 'Compound'. You can define logic like "Box of 10 PCS". This allows Tally to sell 1 Box or just 2 individual pieces from the same stock.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 76 to Day 80</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Create Simple units (NOS, DOZ) and Compound units ("Carton of 24 NOS").
                </div>`,
                shortcut: "Always assign the correct UQC (Unique Quantity Code) for GST reporting.",
                imgSrc: "images/tpro-20-units.jpg"
            },
            {
                heading: "Stock Groups, Categories & Items",
                text: `To keep a clean godown, organize your stock hierarchically.<br>
                - <strong>Stock Group:</strong> The main family (e.g., 'Mobile Phones').<br>
                - <strong>Stock Category:</strong> An independent classification. Create categories like 'Samsung' or 'Dell'.<br>
                - <strong>Stock Item:</strong> The actual product. Go to Create > Stock Item. Name it 'Samsung Galaxy S23', put it under Mobile Phones group, Samsung category, and PCS unit.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 81 to Day 85</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Build an entire electronics inventory tree with 5 Groups, 5 Categories, and 30 Stock Items.
                </div>`,
                shortcut: "Press F12 while creating a Stock Item to enable descriptions, part numbers, or alternative units.",
                imgSrc: "images/tpro-21-stock-items.jpg"
            },
            {
                heading: "Godown Creation and Transfers",
                text: `If you store goods in multiple physical locations, you need Godowns. Press <strong>F11</strong> and ensure 'Maintain Multiple Godowns' is enabled.<br>
                Go to <strong>Create > Godown</strong>. Create 'Main Shop', 'Warehouse A', etc. Use a <strong>Stock Journal (Alt+F7)</strong> to transfer goods internally from the Warehouse to the Shop Display.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 86 to Day 90</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Create 3 Godowns. Pass 5 Stock Journal entries transferring 50 items from 'Warehouse' to 'Shop Display'.
                </div>`,
                shortcut: "Alt+F7 (Stock Journal) is used for internal movement of goods without buying or selling.",
                imgSrc: "images/tpro-22-godowns.jpg"
            },
            {
                heading: "Order Processing (PO / SO Lifecycle)",
                text: `Professional businesses don't just buy and sell blindly; they use an Order Lifecycle. Enable Order Processing in F11.<br>
                <strong>The Purchase Cycle:</strong> Purchase Order (Ctrl+F9) ➔ Receipt Note (Tracking Delivery) ➔ Rejection Out (If damaged) ➔ Final Purchase Bill (F9).<br>
                <strong>The Sales Cycle:</strong> Sales Order (Ctrl+F8) ➔ Delivery Note (Sending goods) ➔ Rejection In ➔ Final Sales Bill (F8).
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 91 to Day 95</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Raise 5 Purchase Orders. Receive goods against them via Receipt Note, reject 2 items, and finalize the Purchase Bill.
                </div>`,
                shortcut: "Order Processing links the delivery challans directly to the final invoices automatically.",
                imgSrc: "images/tpro-23-opening-stock.jpg"
            },
            {
                heading: "Manufacturing (BOM) & Inventory Reports",
                text: `<strong>Bill of Materials (BOM):</strong> Used in manufacturing. You configure an assembled item (e.g., 'Desktop PC') and attach raw materials to it (1 Cabinet, 1 Motherboard, 1 RAM). Using a Manufacturing Journal, Tally consumes the raw materials automatically to produce 1 finished PC.<br>
                <strong>Reports:</strong> Go to Gateway > Stock Summary. Press Alt+F5 for a detailed view. Check 'Reorder Status' to see which items are running out of stock.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 96 to Day 105</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Assemble 10 "Desktop PCs" from raw materials using BOM. Set Reorder Levels for all raw materials so Tally warns you when stock is low.
                </div>`,
                shortcut: "Press F12 in Stock Summary to show Opening Balance, Goods Inwards, Goods Outwards, and Closing Balance side-by-side.",
                imgSrc: "images/tpro-24-stock-summary.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 6: TAXATION (GST, TDS, TCS) (Month 5)
    // ==========================================
    {
        id: "chapter6",
        title: "Module 6: Taxation - GST, TDS, TCS (Month 5)",
        topics: [
            {
                heading: "Enabling GST & Creating Tax Ledgers",
                text: `Press <strong>F11 (Features)</strong>. Set 'Enable GST' to Yes. Select your State, Registration Type (Regular/Composition), and type the 15-digit GSTIN. Configure e-Way bill limits if needed.<br><br>
                <strong>Tax Ledgers:</strong> Group them under 'Duties & Taxes'. Type of Duty: GST.<br>
                - <strong>CGST</strong> (Central) & <strong>SGST</strong> (State) are used together for sales inside your state.<br>
                - <strong>IGST</strong> (Integrated) is used alone for sales outside your state.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 106 to Day 110</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Configure GSTIN details. Create the 3 main GST ledgers without hard-coding tax rates, allowing Tally to pull rates dynamically from items.
                </div>`,
                shortcut: "GSTIN structure: First 2 digits are State Code, next 10 are PAN, last 3 are entity codes.",
                imgSrc: "images/tpro-25-enable-tax.jpg"
            },
            {
                heading: "GST-enabled Sales & Purchase Entries",
                text: `While creating a Stock Item, set 'GST Applicable' to Yes and enter the HSN code and Tax Rate (e.g., 18%). Now, when you pass a Sales Voucher (F8), select the item, and at the bottom, select CGST and SGST. Tally will automatically calculate exactly 9% for CGST and 9% for SGST based on the item's rate.<br>
                <strong>Pro Tip:</strong> Press <strong>Ctrl+O > GST Tax Analysis</strong> to see a detailed breakdown of exactly how Tally calculated the tax amount.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 111 to Day 115</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Pass 20 Local GST invoices (using CGST/SGST) and 10 Interstate invoices (using IGST). Use Ctrl+O to verify tax analysis.
                </div>`,
                shortcut: "If the tax does not calculate automatically, check the Customer's State or the Item's GST configuration.",
                imgSrc: "images/tpro-27-gst-entries.jpg"
            },
            {
                heading: "GSTR-1, GSTR-3B Reporting in Tally",
                text: `Tally automatically drafts your government tax returns based on your voucher entries.<br>
                - <strong>GSTR-1 (Outward Supplies):</strong> Press Alt+G and type 'GSTR-1'. It shows all B2B and B2C sales invoices.<br>
                - <strong>GSTR-3B (Summary Return):</strong> Press Alt+G and type 'GSTR-3B'. It shows your total tax liability against your Input Tax Credit (ITC).<br>
                Review the 'Uncertain Transactions' section to fix errors, then press <strong>Alt+E</strong> to export the Return as a JSON file for the GST Portal.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 116 to Day 120</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Reconcile GSTR-1 and GSTR-3B in Tally. Fix 3 intentionally created mismatch errors (e.g., missing HSN codes) in the Uncertain Transactions section.
                </div>`,
                shortcut: "Alt + G > type 'GSTR-1' or 'GSTR-3B'.",
                imgSrc: "images/tpro-28-gstr-returns.jpg"
            },
            {
                heading: "TDS Deduction & TCS Entries",
                text: `<strong>TDS (Tax Deducted at Source):</strong> If you receive an Audit bill for ₹50,000, you must deduct 10% TDS. Pass a Journal (F7) to record the expense, credit the CA for ₹45k, and credit the 'TDS' ledger for ₹5k. Then, pay the CA via Bank.<br><br>
                <strong>TCS (Tax Collected at Source):</strong> Collected by the seller from the buyer on specific goods like Scrap or Timber. Configure the Sales ledger for TCS. In the Sales Voucher (F8), select the Items, add GST, and then add a 'TCS' ledger at the very bottom.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 121 to Day 130</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Deduct TDS on Rent and Professional Fees via Journal, then process Stat Payment. Collect TCS on Scrap Sales and remit it to the Govt.
                </div>`,
                shortcut: "TDS is almost always deducted via a Journal Entry before the actual payment is made.",
                imgSrc: "images/tpro-29-tds-entries.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 7: PAYROLL & EMPLOYEE RECORDS (Month 6)
    // ==========================================
    {
        id: "chapter7",
        title: "Module 7: Payroll Management (Month 6)",
        topics: [
            {
                heading: "Enabling Payroll & Employee Masters",
                text: `Press <strong>F11 > Maintain Payroll (Yes)</strong>. To calculate Statutory deductions like PF and ESI, set 'Enable Payroll Statutory' to Yes and enter your company's PF/ESI codes.<br>
                <strong>Masters:</strong> Go to Create > Show More. Create <strong>Employee Groups</strong> (e.g., 'Marketing'). Then, go to <strong>Employee</strong> creation. Enter their Name, Joining Date, Group, PAN, Aadhaar details, and Bank Account numbers for salary transfers.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 131 to Day 133</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Create 2 Employee Groups and 5 Employees with full KYC details (PAN, Aadhaar numbers, and Bank data).
                </div>`,
                shortcut: "Proper employee grouping allows you to process salaries for whole departments at once.",
                imgSrc: "images/tpro-31-payroll-enable.jpg"
            },
            {
                heading: "Attendance Types & Pay Heads",
                text: `Go to <strong>Create > Attendance/Production Type</strong>. Create 'Present' (Attendance/Leave with Pay) and 'Absent' (Leave without Pay).<br><br>
                <strong>Pay Heads:</strong> A Pay Head is a component of the salary. Go to Create > Pay Head.<br>
                - <em>Basic Pay & HRA:</em> Type 'Earnings for Employees', Calculation 'On Attendance' (Present).<br>
                - <em>PF Deduction:</em> Type 'Employees Statutory Deduction', Calculation 'As Computed Value' (12% of Basic Pay).<br>
                Next, go to <strong>Define Salary Details</strong> to map these heads to the employee.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 134 to Day 136</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Build Basic, HRA, DA, and PF deduction structures, and link them to the 5 employees.
                </div>`,
                shortcut: "Pay Heads define the logic. Salary Details attach that logic to the specific person.",
                imgSrc: "images/tpro-33-pay-heads.jpg"
            },
            {
                heading: "Processing Payroll & Payslip Generation",
                text: `<strong>Step 1:</strong> Go to Vouchers > F10 > Attendance. Select the employee, choose 'Present', and enter 28 Days.<br>
                <strong>Step 2:</strong> Go to Vouchers > F10 > Payroll. Press <strong>Ctrl+F (Autofill)</strong>. Select 'Salary', choose the date range, and select the Employee Group. Tally will read the 28 days of attendance, calculate the Basic Pay, deduct the PF, and generate the exact payable amount instantly!<br>
                <strong>Step 3:</strong> Go to Display More Reports > Payroll Reports > Payslip to print the professional salary slip.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 137 to Day 140</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Mark 30-day attendance for the 5 employees, run Payroll Autofill, and export their Payslips as PDFs.
                </div>`,
                shortcut: "Ctrl + F (Payroll Autofill) is the most powerful button in the payroll system.",
                imgSrc: "images/tpro-34-payroll-process.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 8: BANKING & SECURITY (Month 6)
    // ==========================================
    {
        id: "chapter8",
        title: "Module 8: Banking & Security (Month 6)",
        topics: [
            {
                heading: "Bank Reconciliation Statement (BRS)",
                text: `Your Tally bank balance rarely matches your real Passbook due to uncleared cheques. To fix this, go to <strong>Banking > Bank Reconciliation</strong>. Select your Bank. Look at your real bank statement, and type the actual 'Bank Date' next to the entries that have cleared. The 'Balance as per Bank' at the bottom will automatically update to match your real Passbook exactly!
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 141 to Day 142</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Clear 15 bank entries using a mock SBI passbook statement provided by the instructor.
                </div>`,
                shortcut: "Alt + R (From the Bank ledger screen to open Reconciliation).",
                imgSrc: "images/tpro-35-brs.jpg"
            },
            {
                heading: "Cheque Printing & Deposit Slips",
                text: `Tally can print details directly onto blank physical cheques. Alter your Bank Ledger, enable 'Enable Cheque Printing', select your exact bank (like HDFC) from Tally's library, and load a blank cheque into your printer.<br>
                <strong>Deposit Slips:</strong> Go to Banking > Deposit Slip. Tally generates a single, professional deposit slip listing all cheque numbers, dates, and amounts received today to take to the bank.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 143 to Day 144</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Configure HDFC cheque dimensions, preview a printed cheque, and generate a multi-cheque Deposit Slip.
                </div>`,
                shortcut: "Always use 'Print Preview' to check alignment before wasting a real cheque.",
                imgSrc: "images/tpro-36-cheque-print.jpg"
            },
            {
                heading: "Data Security, Backup & Restore",
                text: `Financial data is highly confidential. Go to Alt+K (Company) > Security. Set 'Control User Access' to Yes. Create an Administrator password to lock the company.<br>
                <strong>Backup:</strong> Go to Alt+Y (Data menu) > Backup. Select your Company and the Destination (like a USB Pendrive). Tally creates a safe (.tbk) backup file.<br>
                <strong>Restore:</strong> Go to Alt+Y > Restore to perfectly rebuild your business file on a new computer.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 145</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Setup an Admin password, create a Data Backup to the D:/ drive, and successfully Restore it into a new folder.
                </div>`,
                shortcut: "Warning: If you forget the Admin password, your data is locked forever!",
                imgSrc: "images/tpro-38-ebanking.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 9: REAL-WORLD CAPSTONE PROJECTS (Month 6)
    // ==========================================
    {
        id: "chapter9",
        title: "Module 9: Capstone Projects (Month 6 Final)",
        topics: [
            {
                heading: "Project 1: The Trading Company Setup",
                text: `<strong>Objective:</strong> Run a full accounting cycle for a hardware shop.<br>
                1. Create 'Tech World Traders'. Enable GST (18%).<br>
                2. Pass Receipt (F6): Owner brings ₹10,00,000 Capital into HDFC Bank.<br>
                3. Create Godowns: 'Shop' and 'Warehouse'.<br>
                4. Pass Purchase (F9): Buy 100 Dell Laptops @ ₹30,000 each (plus CGST/SGST) from 'Mega Distributors'. Store 20 in Shop, 80 in Warehouse.<br>
                5. Pass Sales (F8): Sell 5 Laptops @ ₹45,000 each (plus CGST/SGST) to 'Raj IT Solutions'.<br>
                <strong>Check:</strong> View the P&L to verify Gross Profit. View GSTR-1 to ensure the sale is recorded under B2B invoices.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 146 to Day 147</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Complete Project 1. Export the final Balance Sheet as a PDF and submit it to the instructor.
                </div>`,
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
                <strong>Check:</strong> Open the Balance Sheet. Ensure 'Duties & Taxes' shows zero liability for TDS after the final payment.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 148 to Day 149</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Complete Project 2. Verify that the TDS report (Form 26Q) reflects the exact transaction.
                </div>`,
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
                <strong>Check:</strong> Go to Payroll Reports and preview Suresh's Payslip to verify the exact Net Payable amount.
                <br><br>
                <div style='background:#f1f5f9; padding:15px; border-radius:8px; border-left:4px solid #0f766e;'>
                    <strong>📅 Timeline: Day 150 (Final Day)</strong><br>
                    <strong>🛠️ Daily Practical Target:</strong> Complete Project 3. Print the final Payslip. Congratulations on completing the 6-Month Tally Prime Professional Course!
                </div>`,
                shortcut: "Ensure the month has 30 days in your calculation settings.",
                imgSrc: "images/tpro-41-project3.jpg"
            }
        ]
    }
];
