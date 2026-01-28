from PIL import Image, ImageDraw

def create_rounded_icon():
    try:
        # Open the original image
        img = Image.open('public/profile.jpg').convert("RGBA")
        
        # Determine square crop size
        h, w = img.size
        size = min(h, w)
        
        # Crop to center square
        left = (w - size) // 2
        top = (h - size) // 2
        img = img.crop((left, top, left + size, top + size))
        
        # Create mask for rounded corners
        mask = Image.new('L', (size, size), 0)
        draw = ImageDraw.Draw(mask)
        
        # Radius ~25% of size for a nice rounded icon look
        radius = int(size * 0.25)
        draw.rounded_rectangle((0, 0, size, size), radius=radius, fill=255)
        
        # Apply mask
        img.putalpha(mask)
        
        # Save
        img.save('public/icon.png')
        print("Successfully created rounded public/icon.png")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_rounded_icon()
