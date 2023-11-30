import pygame

# Initialize Pygame
pygame.init()

# Set up the display
screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("Button Demo")

# Define some colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)

# Create a list to store our buttons
buttons = []

# Create a function to draw a rounded rectangle
def draw_rounded_rectangle(surface, color, rect, radius=10):
    """Draw a rounded rectangle on the given surface."""
    rect = pygame.Rect(rect)
    pygame.draw.rect(surface, color, rect, border_radius=radius)

# Create some buttons
button1 = {
    "rect": pygame.Rect(100, 100, 200, 50),
    "color": RED,
    "text": "Button 1",
}
buttons.append(button1)

button2 = {
    "rect": pygame.Rect(400, 100, 200, 50),
    "color": GREEN,
    "text": "Button 2",
}
buttons.append(button2)

button3 = {
    "rect": pygame.Rect(100, 300, 200, 50),
    "color": BLUE,
    "text": "Button 3",
}
buttons.append(button3)

# Set the font
font = pygame.font.Font(None, 32)

# Main game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        # Check for mouse clicks on the buttons
        for button in buttons:
            if button["rect"].collidepoint(event.pos):
                if event.type == pygame.MOUSEBUTTONDOWN:
                    print("Button clicked:", button["text"])

    # Fill the screen with black
    screen.fill(BLACK)

    # Draw the buttons
    for button in buttons:
        draw_rounded_rectangle(screen, button["color"], button["rect"])

        # Draw the text on the buttons
        text_surface = font.render(button["text"], True, WHITE)
        text_rect = text_surface.get_rect(center=button["rect"].center)
        screen.blit(text_surface, text_rect)

    # Update the display
    pygame.display.flip()

# Quit Pygame
pygame.quit()

