# M23 Studio - Premium Anime Collectibles

A high-end e-commerce platform for 3D-printed and hand-painted anime action figures.

## 🚀 Tech Stack
- **Frontend**: Next.js 15, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL via Prisma ORM
- **State**: Zustand/React Context

## 🛠 Installation

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment Setup**:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```
4. **Database Setup**:
   ```bash
   npx prisma migrate dev --name init
   ```
5. **Run the app**:
   ```bash
   npm run dev
   ```

## 🧪 Testing Instructions

1. **Admin Flow**: 
   - Navigate to `/admin`.
   - Add a new product with a name, description, and image URLs.
   - Verify the product appears on the `/shop` page.
2. **Customer Flow**:
   - Navigate to `/shop`.
   - Select a product $\rightarrow$ Choose "Painted" $\rightarrow$ Add to Cart.
   - Navigate to `/cart` $\rightarrow$ Verify price and quantity $\rightarrow$ Proceed to `/checkout`.
3. **Custom Order**:
   - Navigate to `/custom-order`.
   - Submit a request with a reference URL and description.
   - Verify the request is saved in the `CustomOrder` database table.

## ✅ Final Checklist
- [x] Dark futuristic design with neon accents.
- [x] Product variants (Painted vs Unpainted).
- [x] Currency conversion logic.
- [x] Responsive design (Mobile/Desktop).
- [x] Admin dashboard for product management.
- [x] Custom order request system.
- [x] Full checkout flow.
