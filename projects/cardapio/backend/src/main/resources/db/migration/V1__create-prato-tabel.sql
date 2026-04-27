CREATE TABLE prato(
	prato_id UUID PRIMARY KEY UNIQUE NOT NULL DEFAULT gen_random_uuid(),
	prato_title TEXT NOT NULL,
	prato_image TEXT NOT NULL,
	prato_price INTEGER NOT NULL 
);