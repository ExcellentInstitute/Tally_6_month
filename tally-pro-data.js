// tally-pro-data.js
// Excellent Institute - Advanced Tally Prime 7.0 & Accounting Professional Course
// 6-Month Intensive Curriculum (150 Days)

const tallyProBookData = [
    // ==========================================
    // MONTH 1: ACCOUNTING FOUNDATIONS & TALLY INITIATION
    // Target: Master manual accounting rules, journal entries, and Tally UI navigation.
    // ==========================================
    {
        id: "month1",
        title: "Month 1: Foundations & Tally UI (Days 1-25)",
        topics: [
            {
                heading: "Week 1 (Days 1-5): Fundamental Principles & Golden Rules",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 1: Introduction to Accounting & Entity Concept</strong><br>
                    <em>Theory:</em> Accounting is the language of business. Understand the Business Entity Concept (Owner and Business are separate) and Going Concern Concept.<br>
                    <em>Practical:</em> Analyze a list of 20 expenses and categorize them into 'Business Expense' vs 'Personal Drawings'.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 2: Accrual Concept & Dual Aspect</strong><br>
                    <em>Theory:</em> Incomes/expenses are recorded when they occur, not just when cash moves. The Accounting Equation: Assets = Liabilities + Capital.<br>
                    <em>Practical:</em> Solve 5 equations proving Assets always equal Liabilities + Capital.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 3: The Golden Rules - Real Accounts</strong><br>
                    <em>Theory:</em> Real Accounts deal with tangible Assets (Cash, Furniture). Rule: Debit what comes in, Credit what goes out.<br>
                    <em>Practical:</em> Write Dr/Cr for 15 asset purchase/sale transactions.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 4: The Golden Rules - Personal Accounts</strong><br>
                    <em>Theory:</em> Personal Accounts deal with People/Banks. Rule: Debit the receiver, Credit the giver.<br>
                    <em>Practical:</em> Pass manual entries for money given to and received from 10 different suppliers.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 5: The Golden Rules - Nominal Accounts</strong><br>
                    <em>Theory:</em> Nominal Accounts deal with Expenses/Incomes. Rule: Debit all expenses/losses, Credit all incomes/gains.<br>
                    <em>Practical:</em> Identify Nominal accounts from a 30-item mixed list and apply the rule.
                </div>`,
                shortcut: "Accounting's ultimate goal: Ascertaining Profit/Loss (via P&L) and showing Financial Position (via Balance Sheet).",
                imgSrc: "images/tpro-01-principles.jpg"
            },
            {
                heading: "Week 2 (Days 6-10): Journal Entries & Ledger Posting",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 6-7: Double Entry System & Journal Drafts</strong><br>
                    <em>Theory:</em> Formatting a formal Journal (Date, Particulars, L.F, Dr, Cr). Writing narrations.<br>
                    <em>Practical:</em> Draft 40 complete Journal Entries for a mock startup business covering capital, purchases, and sales.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 8-10: Ledger Posting & Balancing</strong><br>
                    <em>Theory:</em> Transferring Journals to individual 'T-format' Ledgers. Balancing the accounts (c/d and b/d).<br>
                    <em>Practical:</em> Create 15 distinct ledgers from the previous days' journals and calculate their exact closing balances.
                </div>`,
                shortcut: "Debit (Dr.) and Credit (Cr.) must ALWAYS equal exactly the same amount in every entry.",
                imgSrc: "images/tpro-02-journal.jpg"
            },
            {
                heading: "Week 3 (Days 11-15): Trial Balance & Final Accounts",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 11-12: Creating the Trial Balance</strong><br>
                    <em>Theory:</em> Summarizing ledger balances to check arithmetic accuracy.<br>
                    <em>Practical:</em> Extract balances from Week 2's ledgers and prepare a matching Trial Balance.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 13-15: Trading, P&L, and Balance Sheet</strong><br>
                    <em>Theory:</em> Direct vs Indirect expenses. Format of the Balance Sheet (Liabilities on Left, Assets on Right).<br>
                    <em>Practical:</em> Convert the Trial Balance into a final Trading A/c, P&L A/c, and a perfectly tallied Balance Sheet.
                </div>`,
                shortcut: "In Tally Prime, you only do the Journal Entry. Tally instantly builds the Ledgers, Trial Balance, and Final Accounts automatically!",
                imgSrc: "images/tpro-03-final-accounts.jpg"
            },
            {
                heading: "Week 4 (Days 16-20): Basics of Tally Prime 7.0",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 16-17: Installation & Interface Walkthrough</strong><br>
                    <em>Theory:</em> Tally ERP 9 vs Tally Prime 7.0. Understanding Educational Mode. The new Top Menu Bar.<br>
                    <em>Practical:</em> Install Tally Prime, open Educational Mode, and explore the Alt+K, Alt+Y, and Alt+Z menus.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 18-20: Gateway of Tally & Shortcuts</strong><br>
                    <em>Theory:</em> Masters, Transactions, Utilities, and Reports. Deep dive into Alt+G (Go To) and F12 (Configure).<br>
                    <em>Practical:</em> Navigate to 10 different reports using ONLY the keyboard and the Alt+G search bar. No mouse allowed.
                </div>`,
                shortcut: "Alt + G (Go To) is the magic search bar. Jump to any report without closing your current work.",
                imgSrc: "images/tpro-04-interface.jpg"
            },
            {
                heading: "Week 5 (Days 21-25): Company Creation & Management",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 21-23: Create, Alter, Delete Company</strong><br>
                    <em>Theory:</em> Importance of State selection for GST. Financial Year vs Books Beginning From.<br>
                    <em>Practical:</em> Create 5 dummy companies for different states. Alter 2 of them. Permanently delete 1 using Alt+D.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 24-25: F11 Company Features</strong><br>
                    <em>Theory:</em> Toggling Accounting, Inventory, and Taxation settings.<br>
                    <em>Practical:</em> Configure a company strictly for Services (Inventory Off), and another for Trading (Inventory On).
                </div>`,
                shortcut: "Alt + D is the universal 'Delete' command in Tally for companies, ledgers, and vouchers.",
                imgSrc: "images/tpro-05-company.jpg"
            }
        ]
    },

    // ==========================================
    // MONTH 2: MASTERS, GROUPS & VOUCHERS
    // Target: Create flawless ledger hierarchies and record all non-inventory financial routing.
    // ==========================================
    {
        id: "month2",
        title: "Month 2: Ledgers & Voucher Routing (Days 26-50)",
        topics: [
            {
                heading: "Week 6 (Days 26-30): Group Hierarchy",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 26-28: Primary and Sub-Groups</strong><br>
                    <em>Theory:</em> Detailed study of the 28 pre-defined Tally groups. Sundry Debtors (Assets) vs Sundry Creditors (Liabilities).<br>
                    <em>Practical:</em> Map a real-world list of 50 business accounts to their exact correct Tally Group on paper.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 29-30: Managing Account Groups</strong><br>
                    <em>Theory:</em> Creating Custom Groups (e.g., 'North India Debtors' under Sundry Debtors).<br>
                    <em>Practical:</em> Create 5 custom sub-groups in Tally and view the updated Chart of Accounts tree.
                </div>`,
                shortcut: "Gateway of Tally > Chart of Accounts > Groups (To view the entire tree structure).",
                imgSrc: "images/tpro-06-groups.jpg"
            },
            {
                heading: "Week 7 (Days 31-35): Ledger Creation & Opening Balances",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 31-33: Creating Essential Ledgers</strong><br>
                    <em>Theory:</em> Bank, Cash, Purchase, Sales, Expenses, and Party ledgers. Contact details and PAN configuration.<br>
                    <em>Practical:</em> Create 30 business ledgers accurately in Tally without using the mouse.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 34-35: Assigning Opening Balances</strong><br>
                    <em>Theory:</em> Migrating old manual data into Tally. Dr (Asset/Expense) vs Cr (Liability/Income) balances.<br>
                    <em>Practical:</em> Input a given traditional Balance Sheet into Tally via Ledger Opening Balances until the 'Difference' is zero.
                </div>`,
                shortcut: "Use Alt+H (Multi Masters) > Multi Alter from Chart of Accounts to enter opening balances rapidly.",
                imgSrc: "images/tpro-07-opening-bal.jpg"
            },
            {
                heading: "Week 8 (Days 36-40): Contra & Journal Vouchers",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 36-37: Contra Voucher (F4)</strong><br>
                    <em>Theory:</em> Internal cash/bank movement. Depositing, Withdrawing, and Bank-to-Bank transfers.<br>
                    <em>Practical:</em> Record 15 Contra entries. Check the Cash Book to verify balances.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 38-40: Journal Voucher (F7)</strong><br>
                    <em>Theory:</em> Non-cash adjustments. Buying Fixed Assets on credit, passing Depreciation, and rectifying errors.<br>
                    <em>Practical:</em> Pass 10 credit asset purchases and 5 depreciation adjustment entries at year-end.
                </div>`,
                shortcut: "F4 = Internal Cash/Bank movement ONLY. F7 = Non-Cash Adjustments.",
                imgSrc: "images/tpro-08-contra-journal.jpg"
            },
            {
                heading: "Week 9 (Days 41-45): Payment & Receipt Vouchers",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 41-42: Receipt Voucher (F6)</strong><br>
                    <em>Theory:</em> Recording incoming money. Capital introduction, receiving debt from customers.<br>
                    <em>Practical:</em> Process 20 receipt entries via Cash and Cheque.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 43-45: Payment Voucher (F5)</strong><br>
                    <em>Theory:</em> Recording outgoing money. Paying rent, salary, suppliers, and buying cash assets.<br>
                    <em>Practical:</em> Process 25 payment entries. Generate a Cash Flow report to analyze outgoings.
                </div>`,
                shortcut: "F5 = Money Out | F6 = Money In. Use F12 to switch between Single Entry and Double Entry modes.",
                imgSrc: "images/tpro-09-payment-receipt.jpg"
            },
            {
                heading: "Week 10 (Days 46-50): Day Book & Error Rectification",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 46-48: Day Book Overview</strong><br>
                    <em>Theory:</em> Navigating the daily log. Altering, Deleting (Alt+D), and Cancelling (Alt+X) vouchers.<br>
                    <em>Practical:</em> Open a specific date, locate 3 deliberately wrong entries, cancel one, and alter two.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 49-50: Ledger Review & Month 2 Assessment</strong><br>
                    <em>Theory:</em> Reading Ledger Vouchers (Gateway > Display > Account Books > Ledger).<br>
                    <em>Practical:</em> Complete the Month 2 Assessment: 50 mixed non-inventory transactions to be completed in 45 minutes.
                </div>`,
                shortcut: "Press Alt + F2 in the Day Book to change the period and view the entire year's transactions.",
                imgSrc: "images/tpro-10-daybook.jpg"
            }
        ]
    },

    // ==========================================
    // MONTH 3: INVENTORY MANAGEMENT & GODOWNS
    // Target: Build complete inventory architectures, compound units, and godown tracking.
    // ==========================================
    {
        id: "month3",
        title: "Month 3: Inventory & Godown Tracking (Days 51-75)",
        topics: [
            {
                heading: "Week 11 (Days 51-55): Units of Measure",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 51-53: Simple Units & UQC</strong><br>
                    <em>Theory:</em> Creating KGS, NOS, LTR. Importance of Govt UQC mapping for GST.<br>
                    <em>Practical:</em> Create 10 simple units mapped accurately to standard UQC codes.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 54-55: Compound Units</strong><br>
                    <em>Theory:</em> Conversion logic (e.g., 1 Box = 10 Pcs, 1 Ton = 1000 Kgs).<br>
                    <em>Practical:</em> Configure 5 compound units to allow wholesale and retail billing from the same stock item.
                </div>`,
                shortcut: "Gateway > Create > Unit. Press Backspace to change Simple to Compound.",
                imgSrc: "images/tpro-11-units.jpg"
            },
            {
                heading: "Week 12 (Days 56-60): Stock Groups, Categories & Items",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 56-58: Inventory Hierarchy</strong><br>
                    <em>Theory:</em> Group (Electronics) vs Category (Sony/LG). Structuring for easy reporting.<br>
                    <em>Practical:</em> Design and create an inventory tree for a supermarket with 4 Groups, 10 Categories, and 25 Stock Items.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 59-60: Opening Stock Entry</strong><br>
                    <em>Theory:</em> Feeding existing physical stock quantities and rates into Tally.<br>
                    <em>Practical:</em> Input ₹5 Lakhs worth of opening stock across 20 items. Verify the Trading A/c reflection.
                </div>`,
                shortcut: "Press F12 while creating a Stock Item to enable Descriptions and Alternative Units.",
                imgSrc: "images/tpro-12-stock-items.jpg"
            },
            {
                heading: "Week 13 (Days 61-65): Godown Creation and Tracking",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 61-63: Multiple Godowns Setup</strong><br>
                    <em>Theory:</em> F11 Godown activation. Main Location vs Branch Warehouses.<br>
                    <em>Practical:</em> Create 3 Godowns. Transfer opening stock physically into distinct godowns.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 64-65: Stock Journal (Alt+F7)</strong><br>
                    <em>Theory:</em> Moving inventory internally between Godown A and Godown B without selling it.<br>
                    <em>Practical:</em> Record 10 internal stock transfer vouchers. Print the Godown Summary report.
                </div>`,
                shortcut: "Alt + F7 = Stock Journal. Used for internal transfers and manufacturing entries.",
                imgSrc: "images/tpro-13-godowns.jpg"
            },
            {
                heading: "Week 14 (Days 66-70): Sales & Purchase Vouchers (Inventory)",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 66-68: Purchase Voucher (F9)</strong><br>
                    <em>Theory:</em> Item Invoice mode. Supplier invoice tracking. Selecting Godowns during purchase.<br>
                    <em>Practical:</em> Record 15 heavy purchase invoices mapping items directly to specific godowns.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 69-70: Sales Voucher (F8)</strong><br>
                    <em>Theory:</em> Billing customers. Warning for negative stock. Selling from compound units.<br>
                    <em>Practical:</em> Generate 20 sales bills. Include sales of fractions (e.g., selling 1 Box and 3 Pcs).
                </div>`,
                shortcut: "Press Ctrl+H (Change Mode) in F8/F9 to switch between 'Item Invoice' and 'As Voucher' mode.",
                imgSrc: "images/tpro-14-sales-purchase.jpg"
            },
            {
                heading: "Week 15 (Days 71-75): Stock Reports & Month 3 Review",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 71-73: Stock Summary & Reorder Levels</strong><br>
                    <em>Theory:</em> Alt+F5 detailed summary. Setting minimum order quantities to prevent stock-outs.<br>
                    <em>Practical:</em> Set re-order levels for 10 high-selling items. Generate the Reorder Status report.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 74-75: Month 3 Assessment</strong><br>
                    <em>Theory:</em> Full inventory cycle review.<br>
                    <em>Practical:</em> Comprehensive Exam: Create hierarchy, add opening stock, purchase, sell, transfer godowns, and verify closing stock value.
                </div>`,
                shortcut: "Press F12 in Stock Summary to show Inwards, Outwards, and Closing Balance side-by-side.",
                imgSrc: "images/tpro-15-stock-summary.jpg"
            }
        ]
    },

    // ==========================================
    // MONTH 4: TAXATION (GST & E-WAY BILLS)
    // Target: Perfect GST setup, tax invoicing, and automatic GSTR JSON generation.
    // ==========================================
    {
        id: "month4",
        title: "Month 4: GST & Tax Reporting (Days 76-100)",
        topics: [
            {
                heading: "Week 16 (Days 76-80): GST Basics & F11 Configuration",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 76-78: Understanding GST & HSN Codes</strong><br>
                    <em>Theory:</em> SGST, CGST, IGST rules. Composition vs Regular dealer. What are HSN/SAC codes?<br>
                    <em>Practical:</em> Enable GST in F11. Input accurate GSTIN and set company-level tax defaults.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 79-80: Item-Level vs Group-Level GST</strong><br>
                    <em>Theory:</em> Where to define tax rates (Company vs Item level) for a multi-tax rate business.<br>
                    <em>Practical:</em> Configure 10 items at 12% GST and 10 items at 18% GST using HSN master configurations.
                </div>`,
                shortcut: "GSTIN structure: First 2 digits are State Code, next 10 are PAN, last 3 are entity codes.",
                imgSrc: "images/tpro-16-gst-setup.jpg"
            },
            {
                heading: "Week 17 (Days 81-85): Tax Ledgers & Intra/Inter-State Purchases",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 81-82: Creating Duties & Taxes Ledgers</strong><br>
                    <em>Theory:</em> Setting Type of Duty as 'GST'. Why we don't hardcode percentages in the ledger name.<br>
                    <em>Practical:</em> Create Central Tax, State Tax, and Integrated Tax ledgers perfectly.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 83-85: GST Purchase Entries (F9)</strong><br>
                    <em>Theory:</em> ITC (Input Tax Credit). Buying from Local vs Outside State suppliers.<br>
                    <em>Practical:</em> Record 15 purchases. Use Ctrl+O (Tax Analysis) to prove Tally calculated exact ITC automatically.
                </div>`,
                shortcut: "If the tax fails to calculate, check the Supplier's State and the Item's Taxability status.",
                imgSrc: "images/tpro-17-tax-ledgers.jpg"
            },
            {
                heading: "Week 18 (Days 86-90): GST Sales, E-Way Bills & Invoicing",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 86-88: B2B vs B2C Sales (F8)</strong><br>
                    <em>Theory:</em> Business-to-Business (Needs GSTIN) vs Business-to-Consumer. Generating Tax Invoices.<br>
                    <em>Practical:</em> Generate 20 sales bills. Format the Print Preview (Alt+P > Current) to show GST columns.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 89-90: E-Way Bill Integration</strong><br>
                    <em>Theory:</em> Threshold limits (e.g., ₹50,000). Transporter details and distance.<br>
                    <em>Practical:</em> Pass a high-value invoice, fill the mandatory e-Way bill pop-up, and review the JSON export module.
                </div>`,
                shortcut: "Press Alt + P > Current > 'I' (Preview) to see the printable, legally compliant Tax Invoice.",
                imgSrc: "images/tpro-18-gst-sales.jpg"
            },
            {
                heading: "Week 19 (Days 91-95): Credit/Debit Notes with GST",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 91-93: Debit Note (Alt+F5) with Tax Reversal</strong><br>
                    <em>Theory:</em> Returning goods to a supplier and adjusting the ITC claim.<br>
                    <em>Practical:</em> Return defective inventory from Week 17 purchases and apply the exact CGST/SGST reversal.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 94-95: Credit Note (Alt+F6)</strong><br>
                    <em>Theory:</em> Accepting customer returns and issuing tax credits.<br>
                    <em>Practical:</em> Record 5 sales returns. Verify the reduction in Output Tax Liability in the Balance Sheet.
                </div>`,
                shortcut: "Original Invoice Numbers are legally mandatory when passing GST Credit/Debit notes.",
                imgSrc: "images/tpro-19-gst-notes.jpg"
            },
            {
                heading: "Week 20 (Days 96-100): GSTR Reporting & JSON Export",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 96-98: GSTR-1 & GSTR-3B Analysis</strong><br>
                    <em>Theory:</em> Understanding Outward Supplies (GSTR-1) and Summary Return (GSTR-3B).<br>
                    <em>Practical:</em> Open GSTR reports. Identify and resolve 10 deliberately created 'Uncertain Transactions' (Errors).
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 99-100: JSON Export & Month 4 Exam</strong><br>
                    <em>Theory:</em> The Govt Portal uploading process.<br>
                    <em>Practical:</em> Press Alt+E to export GSTR-1 as JSON. Complete Month 4 Exam: Full Tax cycle from F11 to JSON.
                </div>`,
                shortcut: "Alt + G > type 'GSTR-1' to instantly view your outward supplies report.",
                imgSrc: "images/tpro-20-gstr.jpg"
            }
        ]
    },

    // ==========================================
    // MONTH 5: ADVANCED TAX (TDS/TCS) & BANKING
    // Target: Deduct TDS automatically, collect TCS, and master Bank Reconciliation.
    // ==========================================
    {
        id: "month5",
        title: "Month 5: TDS, TCS & BRS (Days 101-125)",
        topics: [
            {
                heading: "Week 21 (Days 101-105): TDS Fundamentals & Setup",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 101-103: Enable TDS & TAN Details</strong><br>
                    <em>Theory:</em> What is Tax Deducted at Source? TAN requirements. Deductee types.<br>
                    <em>Practical:</em> Enable TDS in F11. Create a Company Deductor profile with a valid TAN.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 104-105: Nature of Payment Masters</strong><br>
                    <em>Theory:</em> Section 194J (Professional Fees), 194C (Contracts), and threshold limits.<br>
                    <em>Practical:</em> Create TDS ledgers and assign specific deduction percentage rules (e.g., 10% above ₹30,000).
                </div>`,
                shortcut: "Gateway > Create > TDS Nature of Payment.",
                imgSrc: "images/tpro-21-tds-setup.jpg"
            },
            {
                heading: "Week 22 (Days 106-110): TDS Deduction & Stat Payments",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 106-108: Journal (F7) Deductions</strong><br>
                    <em>Theory:</em> Why TDS is deducted before payment via Journal. Dr Expense, Cr Party, Cr TDS.<br>
                    <em>Practical:</em> Record 10 Audit & Rent bills. Let Tally auto-deduct the correct TDS amount.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 109-110: Remitting to Government</strong><br>
                    <em>Theory:</em> Form 26Q and challan generation.<br>
                    <em>Practical:</em> Use Payment (F5) > Autofill (Ctrl+F) > Stat Payment to automatically clear all pending TDS liabilities to the Bank.
                </div>`,
                shortcut: "TDS must ALWAYS be deducted via a Journal entry before processing the Payment voucher.",
                imgSrc: "images/tpro-22-tds-entries.jpg"
            },
            {
                heading: "Week 23 (Days 111-115): TCS Setup & Invoicing",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 111-112: Tax Collected at Source</strong><br>
                    <em>Theory:</em> How TCS differs from TDS. Applicable goods (Scrap, Timber, High-value cars).<br>
                    <em>Practical:</em> Enable TCS in F11. Create TCS Nature of Goods configurations.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 113-115: TCS Sales Invoices</strong><br>
                    <em>Theory:</em> Calculating TCS on the total bill value inclusive of GST.<br>
                    <em>Practical:</em> Pass 10 Sales (F8) invoices for scrap material. Collect GST + TCS. Remit TCS via Stat Payment.
                </div>`,
                shortcut: "TCS ledgers are created under 'Duties & Taxes' with the Type set to TCS.",
                imgSrc: "images/tpro-23-tcs-entries.jpg"
            },
            {
                heading: "Week 24 (Days 116-120): Bank Reconciliation Statement (BRS)",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 116-118: Mechanics of BRS</strong><br>
                    <em>Theory:</em> Why Company Books and Bank Passbooks mismatch. Uncleared cheques vs direct deposits.<br>
                    <em>Practical:</em> Open the Bank Ledger. Press Alt+R. Cross-reference a mock 30-day SBI physical statement with Tally data.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 119-120: Finalizing Reconciliation</strong><br>
                    <em>Theory:</em> Bank charges and interest adjustments.<br>
                    <em>Practical:</em> Enter exact clearance dates until the "Balance as per Bank" in Tally perfectly matches the physical passbook.
                </div>`,
                shortcut: "Gateway > Banking > Bank Reconciliation (or Alt+R from the bank ledger display).",
                imgSrc: "images/tpro-24-brs.jpg"
            },
            {
                heading: "Week 25 (Days 121-125): Advanced Banking Features",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 121-123: Cheque Printing Setup</strong><br>
                    <em>Theory:</em> Mapping physical cheque dimensions in Tally.<br>
                    <em>Practical:</em> Configure HDFC/SBI cheque formats. Use Alt+P in a Payment voucher to test alignment on blank paper.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 124-125: Deposit Slips & OD Accounts</strong><br>
                    <em>Theory:</em> Generating consolidated deposit slips. Understanding 'Bank OD A/c' liabilities.<br>
                    <em>Practical:</em> Print a deposit slip for 15 received cheques. Set up an Overdraft account and process negative-balance transactions.
                </div>`,
                shortcut: "Bank OD A/c is a Current Liability, whereas a normal Bank A/c is a Current Asset.",
                imgSrc: "images/tpro-25-banking.jpg"
            }
        ]
    },

    // ==========================================
    // MONTH 6: PAYROLL, SECURITY & CAPSTONE PROJECTS
    // Target: Automate salaries, secure data, and complete 3 full-scale business simulations.
    // ==========================================
    {
        id: "month6",
        title: "Month 6: Payroll & Capstone (Days 126-150)",
        topics: [
            {
                heading: "Week 26 (Days 126-130): Payroll Masters & Attendance",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 126-128: Enabling Payroll & Employees</strong><br>
                    <em>Theory:</em> F11 Payroll activation. Statutory PF/ESI codes. Creating Employee Groups (e.g., Sales, Admin).<br>
                    <em>Practical:</em> Register 15 complete Employee Masters with PAN, Aadhaar, and Salary Bank details.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 129-130: Pay Heads & Attendance (F10)</strong><br>
                    <em>Theory:</em> Earnings vs Statutory Deductions. Present vs Absent logic.<br>
                    <em>Practical:</em> Create Basic, HRA, and PF Pay Heads. Pass an Attendance voucher marking specific present days for all 15 staff.
                </div>`,
                shortcut: "Ensure your Pay Heads are strictly defined as 'On Attendance' for Basic Pay, and 'As Computed Value' for PF.",
                imgSrc: "images/tpro-26-payroll-setup.jpg"
            },
            {
                heading: "Week 27 (Days 131-135): Payroll Processing & Payslips",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 131-133: Ctrl+F Payroll Autofill</strong><br>
                    <em>Theory:</em> Automated salary calculation based on attendance fractions.<br>
                    <em>Practical:</em> Open Payroll Voucher (F10) > Autofill. Generate the full month's salary and PF deductions for the entire company in one click.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 134-135: Payslip Printing & Salary Payment</strong><br>
                    <em>Theory:</em> Generating salary slips and passing the final Bank payment entry.<br>
                    <em>Practical:</em> Print customized Payslips for 5 employees. Pass the Bank Payment (F5) to clear the Salary Payable liability.
                </div>`,
                shortcut: "Ctrl + F (Payroll Autofill) is the most powerful button in the payroll system.",
                imgSrc: "images/tpro-27-payslips.jpg"
            },
            {
                heading: "Week 28 (Days 136-140): Security Control & Backup",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 136-137: Administrator Passwords</strong><br>
                    <em>Theory:</em> Tally Vault vs Control User Access. Securing financial data.<br>
                    <em>Practical:</em> Press Alt+K > Security. Create Admin profiles. Create restricted Data Entry profiles that cannot view the Balance Sheet.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 138-140: Backup & Restore (Alt+Y)</strong><br>
                    <em>Theory:</em> Disaster recovery. The .tbk file format.<br>
                    <em>Practical:</em> Backup 3 mock companies to a USB drive. Delete the companies from Tally. Restore them perfectly from the USB backup.
                </div>`,
                shortcut: "Warning: If you forget your Admin password, Tally Solutions cannot recover your data!",
                imgSrc: "images/tpro-28-security-backup.jpg"
            },
            {
                heading: "Week 29 (Days 141-145): Capstone Project 1 & 2",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 141-143: Project 1 - The Trading Company</strong><br>
                    <em>Task:</em> Build 'Tech World Traders'. Enable GST. Insert ₹10L Capital. Buy 100 Laptops across 2 godowns. Sell 45 Laptops. Generate GSTR-1 and verify Gross Profit.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 144-145: Project 2 - Service & TDS Challenge</strong><br>
                    <em>Task:</em> Build a service agency. Receive a ₹1,00,000 Contractor bill. Deduct 2% TDS via Journal. Pay the Contractor ₹98,000. Pay the ₹2,000 TDS to the Govt using Autofill. Verify zero tax liability.
                </div>`,
                shortcut: "Apply everything learned from Months 1 to 5 to execute these flawlessly.",
                imgSrc: "images/tpro-29-projects-1-2.jpg"
            },
            {
                heading: "Week 30 (Days 146-150): Final Capstone & Audit",
                text: `
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 146-148: Project 3 - Manufacturing & BOM</strong><br>
                    <em>Task:</em> Create a 'PC Assembly' item using Bill of Materials (BOM). Consume Cabinet, Motherboard, and RAM to manufacture 10 assembled PCs via Stock Journal (Alt+F7). Sell the final products with GST.
                </div>
                <div style='background:var(--background); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--accent);'>
                    <strong style='color:var(--primary);'>Day 149-150: Final Audit & Course Sign-off</strong><br>
                    <em>Task:</em> Extract the Final Balance Sheet, P&L, and Ratio Analysis of all 3 projects. Export them to PDF (Alt+P > Export). Submit your encrypted Tally backup files for Final PGDCA Certification.
                </div>`,
                shortcut: "Congratulations on completing the 6-Month Tally Prime Professional curriculum!",
                imgSrc: "images/tpro-30-final-project.jpg"
            }
        ]
    }
];
