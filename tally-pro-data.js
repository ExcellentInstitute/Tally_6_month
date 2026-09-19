// tally-pro-data.js
// Excellent Institute - Advanced Tally Prime 7.0 & Accounting Professional Course (6-Month Curriculum)

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
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 1 Target (Days 1-5):</strong> Build a concrete foundation of manual accounting logic before touching the computer.
                </div>
                Accounting is the universal language of business. It is the systematic process of recording, summarizing, analyzing, and reporting financial transactions.<br><br>
                <strong>Key Principles:</strong><br>
                1. <strong>Business Entity Concept:</strong> The owner and the business are two completely separate entities. If the owner takes cash for personal use, it is recorded as 'Drawings'.<br>
                2. <strong>Going Concern:</strong> We assume the business will run forever. This is why we record long-term assets (like land) at their original cost.<br>
                3. <strong>Accrual Concept:</strong> Incomes and expenses are recorded when they occur, not when the cash is actually exchanged. If rent is due for March, it is recorded in March, even if paid in April.<br>
                4. <strong>Dual Aspect (The Accounting Equation):</strong> Assets = Liabilities + Owner's Equity (Capital). Every transaction affects both sides equally.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 1-5)</h4>
                    <ul>
                        <li><strong>Day 1-2:</strong> Write down 20 real-life examples separating Personal vs Business entities.</li>
                        <li><strong>Day 3-5:</strong> Read a provided business case study and identify at least 15 Accrual vs Cash transactions. Submit your written report to the instructor.</li>
                    </ul>
                </div>`,
                shortcut: "Accounting's ultimate goal is twofold: Ascertaining Profit/Loss (via P&L) and showing Financial Position (via Balance Sheet).",
                imgSrc: "images/tpro-01-principles.jpg"
            },
            {
                heading: "Types of Accounts (The Golden Rules)",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 1 Target (Days 6-12):</strong> Memorize the rules that govern every financial transaction in the world.
                </div>
                To record any transaction accurately, you MUST memorize the Three Golden Rules of Accounting. Every account falls into one of three categories:<br><br>
                <strong>1. Real Account (Assets & Properties):</strong> Tangible things like Cash, Furniture, Computers, and Land.<br>
                👉 <em>Rule: Debit what comes in, Credit what goes out.</em><br><br>
                <strong>2. Personal Account (People & Companies):</strong> Names of individuals, bank accounts, suppliers, and customers (e.g., SBI Bank, Rahul Traders).<br>
                👉 <em>Rule: Debit the receiver, Credit the giver.</em><br><br>
                <strong>3. Nominal Account (Expenses & Incomes):</strong> Things that represent money spent or earned, like Rent, Salary, Sales, and Commission.<br>
                👉 <em>Rule: Debit all expenses and losses, Credit all incomes and gains.</em>
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 6-12)</h4>
                    <ul>
                        <li><strong>Day 6-9:</strong> Take a list of 100 random business items (e.g., Wages, HDFC Bank, Machinery, Discount Allowed) and classify them perfectly into Real, Personal, or Nominal.</li>
                        <li><strong>Day 10-12:</strong> Write the specific Debit/Credit rule next to each of the 100 items.</li>
                    </ul>
                </div>`,
                shortcut: "Memorizing the Golden Rules is the absolute foundation of passing any accounting interview.",
                imgSrc: "images/tpro-02-golden-rules.jpg"
            },
            {
                heading: "Double Entry System & Journal Entries",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 1 Target (Days 13-19):</strong> Convert English sentences into mathematical accounting journals.
                </div>
                The Double Entry System means every transaction has two opposite effects: a Debit (Dr) and a Credit (Cr). They must always equal the same amount.<br><br>
                <strong>Example 1 (Starting Business):</strong> You start a business with ₹1,00,000 Cash.<br>
                - Cash Account (Real A/c) comes in 👉 Dr. 1,00,000<br>
                - Capital Account (Personal A/c) gives 👉 Cr. 1,00,000<br><br>
                <strong>Example 2 (Paying Rent):</strong> You pay ₹5,000 Rent in Cash.<br>
                - Rent Account (Nominal A/c) is an expense 👉 Dr. 5,000<br>
                - Cash Account (Real A/c) goes out 👉 Cr. 5,000
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 13-19)</h4>
                    <ul>
                        <li><strong>Day 13-19:</strong> You will be given 50 text-based business transactions. Using pen and paper, create a proper Journal format (Date, Particulars, L.F, Dr, Cr) and pass the manual journal entry for all 50 items.</li>
                    </ul>
                </div>`,
                shortcut: "Journal entries are recorded chronologically (day-by-day) in the primary books of accounts.",
                imgSrc: "images/tpro-03-double-entry.jpg"
            },
            {
                heading: "Ledger Posting, Trial Balance and Final Accounts",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 1 Target (Days 20-25):</strong> Understand how day-to-day entries become a final year-end report.
                </div>
                <strong>1. Ledger Posting:</strong> Transferring journal entries to individual T-shaped account diaries to see exact balances.<br><br>
                <strong>2. Trial Balance:</strong> A summary sheet listing the closing balances of all ledgers. If your accounting is accurate, the total of all Debit balances will exactly equal the total of all Credit balances.<br><br>
                <strong>3. Final Accounts:</strong> Prepared at year-end. Includes:<br>
                - <em>Trading A/c:</em> Shows Gross Profit from direct buying and selling.<br>
                - <em>Profit & Loss A/c:</em> Subtracts indirect expenses (salary, rent) to show Net Profit.<br>
                - <em>Balance Sheet:</em> A snapshot of Assets and Liabilities.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 20-25)</h4>
                    <ul>
                        <li><strong>Day 20-23:</strong> Take the 50 journal entries from the previous week and manually post them into individual 'T-Ledgers' to find their closing balances.</li>
                        <li><strong>Day 24-25:</strong> Create a manual Trial Balance sheet from your ledgers. Ensure the total Debits and Credits match exactly!</li>
                    </ul>
                </div>`,
                shortcut: "In Tally Prime, you only do Voucher Entries. Tally instantly builds the Ledgers, Trial Balance, and Final Accounts automatically!",
                imgSrc: "images/tpro-04-final-accounts.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 2: BASICS OF TALLY PRIME 7.0 (MONTH 2)
    // ==========================================
    {
        id: "chapter2",
        title: "Module 2: Basics of Tally Prime 7.0",
        topics: [
            {
                heading: "Overview & Installation",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 2 Target (Days 26-28):</strong> Transition from paper accounting to the digital software environment.
                </div>
                Tally ERP 9 was the older, blue-screen standard. Tally Prime 7.0 is the modern, color-optimized successor. Tally Prime introduces a much cleaner interface, the powerful 'Go To' search bar, and seamless multitasking. Under the hood, Prime 7.0 manages GST compliance, e-Invoicing, and audit trails automatically.<br><br>
                Download Tally Prime from tallysolutions.com. Install it and open the software. Click <strong>'Continue in Educational Mode'</strong>.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 26-28)</h4>
                    <ul>
                        <li><strong>Day 26:</strong> Independently download and install Tally Prime 7.0 on your lab computer.</li>
                        <li><strong>Day 27-28:</strong> Open Educational Mode. Draw a physical map of the screen interface, labeling the Top Menu, Gateway, and Calculator panel.</li>
                    </ul>
                </div>`,
                shortcut: "Educational Mode works exactly like the paid version, but restricts date entry to the 1st, 2nd, and 31st of the month.",
                imgSrc: "images/tpro-05-overview.jpg"
            },
            {
                heading: "Creating, Altering, Deleting Company",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 2 Target (Days 29-32):</strong> Master the creation and management of digital business files.
                </div>
                Press <strong>Alt+K</strong> (Company Menu) and select <strong>Create</strong>. Enter the Company Name, Mailing Address, and select the State. <em>(Selecting the correct state is vital for accurate GST calculations)</em>. The Financial Year typically starts on 1st April.<br><br>
                <strong>Altering:</strong> Press Alt+K > Alter to fix spelling mistakes.<br>
                <strong>Deleting:</strong> Go to the Alter screen and press <strong>Alt+D</strong>. A warning will appear. Press 'Y' to permanently destroy the company and all its data.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 29-32)</h4>
                    <ul>
                        <li><strong>Day 29-30:</strong> Create 5 different mock companies in Tally representing different states in India.</li>
                        <li><strong>Day 31-32:</strong> Use the Alter command to change their addresses, then permanently Delete 2 of the companies using Alt+D.</li>
                    </ul>
                </div>`,
                shortcut: "Alt + D is the universal 'Delete' command in Tally for companies, ledgers, and vouchers.",
                imgSrc: "images/tpro-07-company.jpg"
            },
            {
                heading: "Understanding Gateway & Navigation",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 2 Target (Days 33-35):</strong> Learn to operate the software at high speed without a mouse.
                </div>
                The <strong>Gateway of Tally</strong> is divided into four main blocks: Masters (Create/Alter), Transactions (Vouchers), Utilities (Banking), and Reports (Balance Sheet).<br><br>
                Master these Tally Prime shortcuts:<br>
                - <strong>Alt + G (Go To):</strong> The magic search bar. Jump to reports without closing your current work.<br>
                - <strong>Ctrl + A:</strong> Instantly accept and save any screen.<br>
                - <strong>F12 (Configure):</strong> Opens hidden settings on your current screen.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 33-35)</h4>
                    <ul>
                        <li><strong>Day 33-35:</strong> Unplug your computer mouse. Spend 3 days navigating deep into reports and menus using only the Arrow Keys, Escape Key, and Alt+G.</li>
                    </ul>
                </div>`,
                shortcut: "If you cannot find a specific option on a screen, press F12! It is likely hidden in the configuration menu.",
                imgSrc: "images/tpro-09-shortcuts.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 3: LEDGER MANAGEMENT (MONTH 2 CONT.)
    // ==========================================
    {
        id: "chapter3",
        title: "Module 3: Ledger & Group Management",
        topics: [
            {
                heading: "Company Configuration Options (F11)",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 2 Target (Days 36-39):</strong> Understand how to turn business features on and off.
                </div>
                As soon as you create and save a company, the F11 Features screen appears. Here you define the business operations.<br>
                - <strong>Accounting:</strong> Set 'Maintain Accounts' to Yes.<br>
                - <strong>Inventory:</strong> Set 'Maintain Inventory' to Yes, and 'Integrate Accounts with Inventory' to Yes.<br>
                - <strong>Taxation:</strong> Enable GST, TDS, or TCS if applicable.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 36-39)</h4>
                    <ul>
                        <li><strong>Day 36-39:</strong> Press F11. Disable Inventory and Taxation. Look at the Gateway of Tally and document which menus disappeared. Then, re-enable them and document the changes.</li>
                    </ul>
                </div>`,
                shortcut: "You can press F11 from the Gateway of Tally at any point in the future to turn these features on or off.",
                imgSrc: "images/tpro-10-f11.jpg"
            },
            {
                heading: "Understanding Group Hierarchy",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 2 Target (Days 40-44):</strong> Master the 28 pre-defined Tally Groups to ensure accurate Balance Sheets.
                </div>
                Tally operates on a strict Group Hierarchy. Placing a ledger in the wrong group will completely ruin the Balance Sheet.<br>
                - <em>Sundry Debtors:</em> Customers you sell to (Current Assets).<br>
                - <em>Sundry Creditors:</em> Suppliers you buy from (Current Liabilities).<br>
                - <em>Fixed Assets:</em> Computers, Land, Furniture owned.<br>
                - <em>Indirect Expenses:</em> Office Rent, Staff Salary, Electricity Bill.<br>
                - <em>Duties & Taxes:</em> All GST, TDS, and Tax ledgers.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 40-44)</h4>
                    <ul>
                        <li><strong>Day 40-44:</strong> You will be given a list of 100 random business ledgers. In Tally, assign each of the 100 ledgers to their exact correct Group without looking at a cheat sheet.</li>
                    </ul>
                </div>`,
                shortcut: "Gateway of Tally > Chart of Accounts > Groups (To view the entire tree structure).",
                imgSrc: "images/tpro-11-groups.jpg"
            },
            {
                heading: "Creating Ledgers & Opening Balances",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 2 Target (Days 45-50):</strong> Learn to migrate old paper business data into Tally accurately.
                </div>
                Go to <strong>Gateway of Tally > Create > Ledger</strong>. Type 'Sales A/c' under Sales Accounts, 'SBI Bank' under Bank Accounts, etc.<br><br>
                <strong>Opening Balances:</strong> If you are switching an existing business to Tally, you must enter their current financial position. Go to Alter > Ledger. Select the ledger, and at the bottom, type the exact cash/bank balance available today. 
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 45-50)</h4>
                    <ul>
                        <li><strong>Day 45-48:</strong> Create 30 specific Ledgers in Tally. Alter the default 'Cash' and 'Profit & Loss' ledgers.</li>
                        <li><strong>Day 49-50:</strong> Input 10 specific Opening Balances from a provided paper Balance Sheet. Check your digital Balance Sheet to ensure the "Difference in Opening Balances" is exactly zero.</li>
                    </ul>
                </div>`,
                shortcut: "You can enter multiple opening balances rapidly from Gateway > Chart of Accounts > Ledgers > Press Alt+H (Multi Masters) > Multi Alter.",
                imgSrc: "images/tpro-13-opening-bal.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 4: VOUCHER ENTRY (MONTH 3)
    // ==========================================
    {
        id: "chapter4",
        title: "Module 4: Voucher Entry in Tally",
        topics: [
            {
                heading: "Contra Voucher (F4)",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 3 Target (Days 51-54):</strong> Master internal money routing.
                </div>
                <strong>Press F4 from the Vouchers screen.</strong><br>
                Contra is a specialized voucher used ONLY for internal money movement between Cash and Bank accounts. No outside supplier or customer is involved.<br>
                1. Depositing Cash into the Bank (Dr. Bank / Cr. Cash).<br>
                2. Withdrawing Cash from the ATM for office use (Dr. Cash / Cr. Bank).<br>
                3. Transferring funds from SBI Bank to HDFC Bank (Dr. HDFC / Cr. SBI).
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 51-54)</h4>
                    <ul>
                        <li><strong>Day 51-54:</strong> Pass 20 complex Contra entries involving ATM withdrawals, petty cash transfers, and Bank-to-Bank NEFTs.</li>
                    </ul>
                </div>`,
                shortcut: "F4 = Internal Cash/Bank movement ONLY.",
                imgSrc: "images/tpro-14-contra.jpg"
            },
            {
                heading: "Payment (F5) and Receipt (F6)",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 3 Target (Days 55-60):</strong> Record core daily cash flows of a business.
                </div>
                <strong>Payment Voucher (F5):</strong> Used strictly when money is going OUT of the business. You use it to pay Suppliers, pay office rent, or purchase fixed assets for cash.<br><br>
                <strong>Receipt Voucher (F6):</strong> Used strictly when money is coming INTO the business. You use it when the owner brings in Capital, when you receive a loan, or when a Customer pays their outstanding bill.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 55-60)</h4>
                    <ul>
                        <li><strong>Day 55-60:</strong> Record 30 diverse entries involving paying office rent, receiving student fees, paying supplier balances, and owner capital investments. Check the Cash Ledger balance afterwards.</li>
                    </ul>
                </div>`,
                shortcut: "F5 = Money Out | F6 = Money In.",
                imgSrc: "images/tpro-15-payment-receipt.jpg"
            },
            {
                heading: "Journal Voucher (F7)",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 3 Target (Days 61-65):</strong> Handle complex non-cash adjustments.
                </div>
                <strong>Press F7 from the Vouchers screen.</strong><br>
                The Journal is the adjustment voucher. It is used for transactions where absolutely NO cash or bank money moves at that exact moment. Uses include buying Fixed Assets on credit (Dr. Computer / Cr. Supplier A/c), and recording Depreciation on assets (Dr. Depreciation / Cr. Asset).
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 61-65)</h4>
                    <ul>
                        <li><strong>Day 61-65:</strong> Pass 15 non-cash adjustment entries, including buying office furniture on credit, writing off bad debts, and calculating 10% depreciation on machinery.</li>
                    </ul>
                </div>`,
                shortcut: "F7 = Non-Cash Adjustments and Credit Purchases of Assets.",
                imgSrc: "images/tpro-16-journal.jpg"
            },
            {
                heading: "Sales (F8) & Purchase (F9)",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 3 Target (Days 66-70):</strong> Master B2B and B2C trading invoices.
                </div>
                These vouchers are exclusively for trading stock/inventory.<br>
                <strong>Purchase (F9):</strong> Enter the Supplier Invoice No, select the Party A/c, select Purchase A/c, and list the items and quantities.<br>
                <strong>Sales (F8):</strong> Select the Party A/c, Sales A/c, and list the items. Tally will automatically calculate the subtotal.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 66-70)</h4>
                    <ul>
                        <li><strong>Day 66-70:</strong> Process 40 B2B trading invoices. Generate sales bills for 20 customers, and log purchase bills from 20 suppliers using 'Item Invoice' mode.</li>
                    </ul>
                </div>`,
                shortcut: "Press Ctrl+H (Change Mode) in F8/F9 to switch between 'Item Invoice' (for inventory) and 'As Voucher' (for manual Dr/Cr entries).",
                imgSrc: "images/tpro-17-sales-purchase.jpg"
            },
            {
                heading: "Credit/Debit Notes & Day Book",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 3 Target (Days 71-75):</strong> Handle damaged goods returns and perform daily audits.
                </div>
                <strong>Debit Note (Alt+F5):</strong> Purchase Return. You return damaged goods back to your supplier.<br>
                <strong>Credit Note (Alt+F6):</strong> Sales Return. A customer returns damaged goods back to you.<br><br>
                <strong>The Day Book:</strong> Acts as your daily ledger log. It lists every single voucher entered on the current date. Press Alt+X to cancel a voucher.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 71-75)</h4>
                    <ul>
                        <li><strong>Day 71-73:</strong> Process 10 complex Purchase and Sales returns using Credit/Debit notes.</li>
                        <li><strong>Day 74-75:</strong> Open the Day Book. Change the period (Alt+F2) to view the entire month. Find 3 specific errors placed by the instructor and use Alt+X to cancel them.</li>
                    </ul>
                </div>`,
                shortcut: "Press F10 (Other Vouchers) if you forget the shortcuts for Debit/Credit Notes.",
                imgSrc: "images/tpro-18-notes.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 5: INVENTORY MANAGEMENT (MONTH 4)
    // ==========================================
    {
        id: "chapter5",
        title: "Module 5: Inventory Management",
        topics: [
            {
                heading: "Units of Measure (Simple & Compound)",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 4 Target (Days 76-80):</strong> Build complex measurement structures for wholesale businesses.
                </div>
                Tally must know how you count your goods. Go to <strong>Create > Unit</strong>.<br>
                <strong>Simple Units:</strong> Create a Symbol (PCS). You MUST select the official UQC (Unique Quantity Code) as 'NOS-NUMBERS' for GST filing.<br>
                <strong>Compound Units:</strong> Press Backspace on the Unit Creation screen and change the Type to 'Compound'. You can define logic like "Box of 10 PCS". This allows Tally to sell 1 Box or just 2 individual pieces.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 76-80)</h4>
                    <ul>
                        <li><strong>Day 76-80:</strong> Create 10 Simple Units with correct UQCs. Then, create 5 Compound units (e.g., 'Box of 12 Dozen', 'Carton of 50 PCS').</li>
                    </ul>
                </div>`,
                shortcut: "Always assign the correct UQC (Unique Quantity Code) for GST reporting.",
                imgSrc: "images/tpro-20-units.jpg"
            },
            {
                heading: "Stock Groups, Categories & Items",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 4 Target (Days 81-86):</strong> Organize massive warehouse inventories cleanly.
                </div>
                - <strong>Stock Group:</strong> The main family (e.g., 'Mobile Phones').<br>
                - <strong>Stock Category:</strong> An independent classification (Create > Show More > Stock Category). e.g., 'Samsung'.<br>
                - <strong>Stock Item:</strong> The actual product. Name it 'Samsung Galaxy S23', put it under Mobile Phones group, Samsung category, and PCS unit.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 81-86)</h4>
                    <ul>
                        <li><strong>Day 81-86:</strong> Build a complete Electronics Store inventory tree. Create 5 Main Groups, 10 Categories (Brands/5G/4G), and 40 individual Stock Items mapped perfectly.</li>
                    </ul>
                </div>`,
                shortcut: "Press F12 while creating a Stock Item to enable descriptions, part numbers, or alternative units.",
                imgSrc: "images/tpro-21-stock-items.jpg"
            },
            {
                heading: "Godown Creation and Tracking",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 4 Target (Days 87-92):</strong> Track multi-location physical inventory transfers.
                </div>
                Press <strong>F11</strong> and ensure 'Maintain Multiple Godowns' is enabled.<br>
                Go to <strong>Create > Godown</strong>. Create 'Main Shop', 'Warehouse A', etc. When passing a Purchase (F9) or Sales (F8) voucher, an extra box will pop up asking exactly which Godown the item is entering or leaving.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 87-92)</h4>
                    <ul>
                        <li><strong>Day 87-92:</strong> Purchase 500 units of stock into 'Warehouse A'. Use a Stock Journal (Alt+F7) to physically transfer 100 units from 'Warehouse A' to 'Main Shop'. Verify the balance in both Godowns.</li>
                    </ul>
                </div>`,
                shortcut: "Tally provides a default godown named 'Main Location'.",
                imgSrc: "images/tpro-22-godowns.jpg"
            },
            {
                heading: "Opening Stock & Reports",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 4 Target (Days 93-100):</strong> Audit and analyze warehouse health.
                </div>
                Go to <strong>Gateway of Tally > Stock Summary</strong>. This report shows your real-time closing stock and its total financial value.<br>
                Press <strong>Alt+F5</strong> for a detailed view. If you select an item and press Enter, you will see the 'Godown/Item Vouchers', which lists every single inward and outward movement of that specific product.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 93-100)</h4>
                    <ul>
                        <li><strong>Day 93-96:</strong> Enter opening stock for 20 items from last year's records.</li>
                        <li><strong>Day 97-100:</strong> Analyze the Stock Summary. Locate 3 items flashing "Negative Stock" warnings. Investigate the Day Book, find the over-sold vouchers, and fix the errors.</li>
                    </ul>
                </div>`,
                shortcut: "Press F12 in Stock Summary to show Opening Balance, Goods Inwards, Goods Outwards, and Closing Balance side-by-side.",
                imgSrc: "images/tpro-24-stock-summary.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 6: TAXATION - GST, TDS, TCS (MONTH 5)
    // ==========================================
    {
        id: "chapter6",
        title: "Module 6: Taxation (GST, TDS, TCS)",
        topics: [
            {
                heading: "Enabling GST & Creating Tax Ledgers",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 5 Target (Days 101-105):</strong> Configure the legal tax framework of the business.
                </div>
                Press <strong>F11 (Features)</strong>. Set 'Enable GST' to Yes. Select your State, Registration Type, and type the 15-digit GSTIN.<br>
                Tax ledgers must be grouped under <strong>Duties & Taxes</strong>. Create 3 ledgers (Type: GST):<br>
                - <strong>CGST</strong> (Central Tax) & <strong>SGST</strong> (State Tax) for inside-state sales.<br>
                - <strong>IGST</strong> (Integrated Tax) for outside-state sales.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 101-105)</h4>
                    <ul>
                        <li><strong>Day 101-105:</strong> Configure the main company GSTIN. Create the CGST, SGST, and IGST master ledgers. Update 5 Supplier ledgers with their correct State and 15-digit GSTINs.</li>
                    </ul>
                </div>`,
                shortcut: "Never hard-code the tax rate (like 'CGST 9%') into the ledger. Keep it generic ('CGST') and let Tally pull the rate from the Stock Item.",
                imgSrc: "images/tpro-26-tax-ledgers.jpg"
            },
            {
                heading: "GST-enabled Sales & Purchase Entries",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 5 Target (Days 106-112):</strong> Process automated tax billing for local and interstate trading.
                </div>
                While creating a Stock Item, set 'GST Applicable' to Yes and enter the HSN code and Tax Rate (e.g., 18%). Now, when you pass a Sales Voucher (F8), select the item, and at the bottom, select CGST and SGST. Tally will automatically calculate exactly 9% for CGST and 9% for SGST based on the item's rate.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 106-112)</h4>
                    <ul>
                        <li><strong>Day 106-112:</strong> Process 30 Invoices. Ensure 15 are Local (CGST/SGST) and 15 are Interstate (IGST). Use <strong>Ctrl+O > GST Tax Analysis</strong> on every bill to verify Tally's mathematical breakdown.</li>
                    </ul>
                </div>`,
                shortcut: "If the tax does not calculate automatically, check the Customer's State or the Item's GST configuration.",
                imgSrc: "images/tpro-27-gst-entries.jpg"
            },
            {
                heading: "GSTR-1, GSTR-3B Reporting in Tally",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 5 Target (Days 113-118):</strong> Generate and export legal government tax returns.
                </div>
                Tally automatically drafts your government tax returns.<br>
                - <strong>GSTR-1 (Outward Supplies):</strong> Press Alt+G and type 'GSTR-1'. Shows all B2B and B2C sales invoices.<br>
                - <strong>GSTR-3B (Summary Return):</strong> Shows your total tax liability against your Input Tax Credit (ITC).<br>
                Press <strong>Alt+E</strong> to export the Return as a JSON file for the Govt Portal.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 113-118)</h4>
                    <ul>
                        <li><strong>Day 113-118:</strong> Open GSTR-1. Locate 5 intentional GSTIN errors placed in the "Uncertain Transactions" bucket by the instructor. Fix the errors so the bucket drops to 0, then Export the final JSON file.</li>
                    </ul>
                </div>`,
                shortcut: "Alt + G > type 'GSTR-1' or 'GSTR-3B'.",
                imgSrc: "images/tpro-28-gstr-returns.jpg"
            },
            {
                heading: "TDS Deduction & TCS Entries",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 5 Target (Days 119-125):</strong> Master direct taxation (TDS/TCS) routing and statutory payments.
                </div>
                <strong>TDS:</strong> If you receive an Audit bill for ₹50,000, use a Journal (F7) to Dr. Audit Expense 50,000 | Cr. Sharma CA 45,000 | Cr. TDS on Prof Fees 5,000. Then use Payment (F5) to pay Sharma CA, and a Stat Payment to pay the Government.<br>
                <strong>TCS:</strong> Collected by the seller from the buyer at the time of sale. You add a 'TCS' ledger at the bottom of the Sales Voucher (F8), and Tally calculates TCS on the total bill value.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 119-125)</h4>
                    <ul>
                        <li><strong>Day 119-122:</strong> Pass 5 Journal entries deducting 10% TDS for Rent and Audit fees. Pass the subsequent Bank Payment vouchers to clear the liabilities.</li>
                        <li><strong>Day 123-125:</strong> Process 5 Sales invoices for 'Scrap Material', collecting TCS automatically on the bill.</li>
                    </ul>
                </div>`,
                shortcut: "TDS is almost always deducted via a Journal Entry before the actual payment is made.",
                imgSrc: "images/tpro-29-tds-entries.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 7: PAYROLL & EMPLOYEE RECORDS (MONTH 6)
    // ==========================================
    {
        id: "chapter7",
        title: "Module 7: Payroll & Employee Records",
        topics: [
            {
                heading: "Enabling Payroll & Employee Masters",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 6 Target (Days 126-128):</strong> Build a complete digital Human Resources database.
                </div>
                Press <strong>F11 > Maintain Payroll (Yes)</strong>. Set 'Enable Payroll Statutory' to Yes and enter your company's PF/ESI registration codes.<br>
                Go to Create > Show More. Create <strong>Employee Groups</strong> (e.g., 'Marketing'). Then, go to <strong>Employee</strong> creation. Enter their Name, Joining Date, Group, PAN, Aadhaar, and Bank Account details.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 126-128)</h4>
                    <ul>
                        <li><strong>Day 126-128:</strong> Create 3 Employee Groups. Create 10 full Employee profiles inside those groups, including their full Bank Details and Government ID numbers for stat compliance.</li>
                    </ul>
                </div>`,
                shortcut: "Proper employee grouping allows you to process salaries for whole departments at once.",
                imgSrc: "images/tpro-31-payroll-enable.jpg"
            },
            {
                heading: "Attendance & Pay Heads Configuration",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 6 Target (Days 129-132):</strong> Program the mathematical logic for automated salary structures.
                </div>
                Go to <strong>Create > Attendance/Production Type</strong>. Create 'Present' (Leave with Pay) and 'Absent' (Leave without Pay).<br>
                A <strong>Pay Head</strong> is a component of the salary (Create > Pay Head).<br>
                - <em>Basic Pay & HRA:</em> 'Earnings for Employees', Calculation 'On Attendance'.<br>
                - <em>PF Deduction:</em> 'Employees Statutory Deduction', Calculation 'As Computed Value' (e.g., 12%).
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 129-132)</h4>
                    <ul>
                        <li><strong>Day 129-132:</strong> Configure 5 Pay Heads (Basic, HRA, DA, PF, ESI). Link them to the 10 Employees created yesterday using 'Define Salary Details', entering their exact monthly package limits.</li>
                    </ul>
                </div>`,
                shortcut: "Pay Heads define the logic. Salary Details attach that logic to the specific person.",
                imgSrc: "images/tpro-33-pay-heads.jpg"
            },
            {
                heading: "Processing Payroll & Payslip Generation",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 6 Target (Days 133-135):</strong> Execute bulk salary processing and print official Payslips.
                </div>
                <strong>Step 1:</strong> Go to Vouchers > F10 > Attendance. Select the employee, choose 'Present', and enter 28 Days.<br>
                <strong>Step 2:</strong> Go to Vouchers > F10 > Payroll. Press <strong>Ctrl+F (Autofill)</strong>. Select 'Salary', choose the date range, and select the Employee Group. Tally will calculate the Basic Pay, deduct the PF, and generate the exact payable amount instantly!
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 133-135)</h4>
                    <ul>
                        <li><strong>Day 133-135:</strong> Enter Attendance for all 10 employees (give some 30 days, some 25 days). Use Payroll Autofill to process the salary for the entire company at once. Export and print 5 official Payslips.</li>
                    </ul>
                </div>`,
                shortcut: "Ctrl + F (Payroll Autofill) is the most powerful button in the payroll system.",
                imgSrc: "images/tpro-34-payroll-process.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 8: BANKING FEATURES (MONTH 6 CONT.)
    // ==========================================
    {
        id: "chapter8",
        title: "Module 8: Banking Features in Tally",
        topics: [
            {
                heading: "Bank Reconciliation Statement (BRS)",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 6 Target (Days 136-139):</strong> Audit and align software data with real-world bank statements.
                </div>
                Your Tally bank balance rarely matches your real Passbook due to uncleared cheques. To fix this, go to <strong>Banking > Bank Reconciliation</strong>. Select your Bank. Tally shows all un-reconciled transactions. Look at your real bank statement, and type the actual 'Bank Date' next to the entries that have cleared. The 'Balance as per Bank' at the bottom will automatically update to match your real Passbook exactly!
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 136-139)</h4>
                    <ul>
                        <li><strong>Day 136-139:</strong> Take a printed physical Bank Statement with 20 transactions. Open Tally's BRS screen and enter the clearance dates manually until the 'Balance as per Bank' perfectly matches the paper statement.</li>
                    </ul>
                </div>`,
                shortcut: "Gateway > Banking > Bank Reconciliation (or Alt+R from the bank ledger display).",
                imgSrc: "images/tpro-35-brs.jpg"
            },
            {
                heading: "Cheque Printing & e-Banking Integration",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 6 Target (Days 140-143):</strong> Automate banking paperwork and digital fund transfers.
                </div>
                <strong>Cheque Printing:</strong> Alter your Bank Ledger, enable 'Enable Cheque Printing', and select your exact bank (like HDFC) from Tally's library. Put a blank cheque in your printer, pass a Payment voucher, and Tally will print the Name and Amount perfectly on the lines.<br>
                <strong>e-Banking Integration:</strong> Pass your payment vouchers, go to Banking > e-Payments, and export the file. Upload this file to your corporate net-banking portal to process all salaries or supplier payments simultaneously.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 140-143)</h4>
                    <ul>
                        <li><strong>Day 140-143:</strong> Configure Cheque Printing for SBI. Generate 5 Payment Vouchers and use 'Print Preview' to check the text alignment on the digital cheque template. Print a 'Deposit Slip' for 5 received customer cheques.</li>
                    </ul>
                </div>`,
                shortcut: "Always use 'Print Preview' to check alignment before wasting a real physical cheque.",
                imgSrc: "images/tpro-36-cheque-print.jpg"
            }
        ]
    },

    // ==========================================
    // MODULE 9: REAL-WORLD CAPSTONE PROJECTS (FINAL EXAMS)
    // ==========================================
    {
        id: "chapter9",
        title: "Module 9: Capstone Projects (Final Exams)",
        topics: [
            {
                heading: "Project 1: The Trading Company Setup",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 6 Target (Days 144-145):</strong> Final Evaluation - Trade & Inventory.
                </div>
                <strong>Task:</strong> Create a company named 'Excellent Traders'. Enable GST (18%).<br>
                2. Pass Receipt (F6): Owner brings ₹10,00,000 Capital into HDFC Bank.<br>
                3. Create Godowns: 'Shop' and 'Warehouse'.<br>
                4. Pass Purchase (F9): Buy 100 Dell Laptops @ ₹30,000 each (plus CGST/SGST). Store 20 in Shop, 80 in Warehouse.<br>
                5. Pass Sales (F8): Sell 5 Laptops @ ₹45,000 each (plus CGST/SGST) to 'Raj IT Solutions'.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 144-145)</h4>
                    <ul>
                        <li><strong>Execution:</strong> Complete the above cycle without assistance. Check your Profit & Loss A/c to verify Gross Profit. View GSTR-1 to ensure the sale is recorded correctly. Export a Backup (.tbk) file.</li>
                    </ul>
                </div>`,
                shortcut: "Save your data backup (Alt+Y) in your student folder after completing the project.",
                imgSrc: "images/tpro-39-project1.jpg"
            },
            {
                heading: "Project 2: The Service & Taxation Challenge",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 6 Target (Days 146-147):</strong> Final Evaluation - Complex Corporate Taxation.
                </div>
                <strong>Task:</strong> Your company received an Audit Service bill from 'Sharma CA' for ₹60,000.<br>
                1. Enable TDS in F11. Create a TDS Ledger for 'TDS on Professional Fees @ 10%'.<br>
                2. Pass Journal (F7) to record the expense and automatically deduct ₹6,000 as TDS.<br>
                3. Pass Payment (F5) to pay ₹54,000 to Sharma CA.<br>
                4. Pass Payment (F5) using Autofill (Ctrl+F) to pay the ₹6,000 TDS to the Government.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 146-147)</h4>
                    <ul>
                        <li><strong>Execution:</strong> Complete the TDS routing. Open the Balance Sheet. Ensure 'Duties & Taxes' shows exactly zero liability for TDS after your final government payment is processed.</li>
                    </ul>
                </div>`,
                shortcut: "TDS must ALWAYS be deducted via a Journal entry before processing the Payment voucher.",
                imgSrc: "images/tpro-40-project2.jpg"
            },
            {
                heading: "Project 3: Advanced Payroll Automation",
                text: `
                <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                    <strong>📅 Month 6 Target (Days 148-150):</strong> Final Evaluation - HR & Salary Automation.
                </div>
                <strong>Task:</strong> Create an employee 'Anil Kumar' with a Basic Pay of ₹15,000/month. Create an Attendance type 'Present'. Pass an Attendance voucher marking Anil present for 28 days in April. Use Payroll Autofill to process his salary.
                <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                    <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 148-150)</h4>
                    <ul>
                        <li><strong>Execution:</strong> Run the automated payroll cycle. Ensure your Pay Heads are strictly defined ('On Attendance' for Basic Pay, and 'As Computed Value' for PF). Print the final Payslip showing the exact pro-rated salary for 28 days.</li>
                        <li><strong>Graduation:</strong> Perform a final data backup to a USB drive and submit to the instructor.</li>
                    </ul>
                </div>`,
                shortcut: "Ensure the month has 30 days in your calculation settings.",
                imgSrc: "images/tpro-41-project3.jpg"
            }
        ]
    }
];
