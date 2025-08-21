# Track Images Generated 

## Task Overview

In this task, we implemented a feature that tracks and displays all generated images in the app. When a user enters a prompt and clicks "Generate Image", the app:

Sends the prompt to the /api/generate-image endpoint.

Displays the latest generated image.

Stores each generated image in a list (generatedImages state).

Renders thumbnails of previously generated images below the main form.

Allows users to click thumbnails to view the image again.