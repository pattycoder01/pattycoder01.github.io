# Official Handbook for using the Dummy Game Installer by PattyCoder

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Understanding the Interface](#understanding-the-interface)
4. [Adding Games](#adding-games)
5. [Installing Games](#installing-games)
6. [Running Games](#running-games)
7. [Uninstalling Games](#uninstalling-games)
8. [Using the Official Database](#using-the-official-database)
9. [File Structure](#file-structure)
10. [Troubleshooting](#troubleshooting)
11. [Advanced Tips](#advanced-tips)

---

## Introduction

> **ANTI-PIRACY DISCLAIMER:** This application does NOT download, distribute, or provide access to any actual game files. It only creates small dummy processes for presence display purposes.

The Dummy Game Installer is a tool designed to create dummy game processes that can be detected by applications like Discord. This allows you to display custom game presence without actually running the real game.

**What it does:**
- Creates lightweight dummy executables that mimic real game processes
- Allows you to manage multiple game dummies
- Provides an easy-to-use graphical interface
- Supports importing games from an official online database

**System Requirements:**
- Windows operating system
- No additional dependencies (if using the compiled executable)

---

## Getting Started

### First Launch

1. Extract all files from the archive to a folder of your choice
2. Run `gui_app.exe`
3. Everything should be ready

### Initial Setup

On first launch, the application is ready to use immediately. You can either:
- Add games manually
- Import games from the official database
- Or do both

---

## Understanding the Interface

### Main Window

The application has two main tabs:

**Available Games Tab**
- Shows all games that have been added to your library
- These games are ready to be installed but not yet active
- Double-click a game to install it quickly

**Installed Games Tab**
- Shows games that are currently installed and ready to run
- These are the games you can launch
- Double-click a game to run it instantly

### Status Bar

At the bottom of the window, you'll find:
- Current operation status
- Number of available and installed games
- Real-time feedback on actions

### Buttons

**Available Games Tab:**
- **Add New Game** - Manually add a custom game
- **Add from Database** - Import games from the official online database
- **Install Selected** - Install the selected game from your library

**Installed Games Tab:**
- **Run Selected** - Launch the selected game dummy
- **Uninstall Selected** - Remove the installed game dummy

**Bottom:**
- **Refresh Lists** - Manually refresh both game lists

---

## Adding Games

### Method 1: Manual Addition

1. Click **Add New Game** in the Available Games tab
2. Fill in the dialog fields:
   - **Game Dummy Name:** The display name (e.g., "Where Winds Meet")
   - **Parent Folder:** The folder where the official game exe is stored (e.g., "Win64"; only use the folder name, not the path)
   - **Executable Name:** The .exe filename (e.g., "wwm.exe" or just "wwm")
3. Click **OK**
4. The game will appear in your Available Games list

**Tips for Manual Addition:**
- Use the actual executable name of the real game for best results
- Parent folder names should be a single folder name like "Win64", not "some_folder/Win64" or "Win64/"
- The .exe extension is added automatically if you forget it

### Method 2: Database Import

1. Click **Add from Database** in the Available Games tab
2. Wait for the database to load (requires internet connection)
3. A dialog will show all available games from the official database
4. Select one or multiple games:
   - Click individual games to select them
   - Use **Select All** to choose everything
   - Hold Ctrl and click to select multiple specific games
5. Click **OK**
6. Selected games will be added to your Available Games list

**Database Benefits:**
- Pre-configured with correct executable names
- Regularly updated with popular games
- No need to research game executable names

---

## Installing Games

Installing a game makes it ready to run.
**NOTE:** This is not piracy! You are not downloading any actual game executables. The program simply creates a dummy executable with the same name as the real game.

**To Install:**
1. Go to the **Available Games** tab
2. Select a game from the list
3. Click **Install Selected** (or double-click the game)
4. The application will automatically switch to the Installed Games tab
5. Confirmation message will appear

**What Happens During Installation:**
- A copy of the dummy executable is placed in `dummy_gamepaths/[parent_folder]/[game_name].exe`
- The game becomes available to run
- The game remains in your Available Games list for future reinstalls

---

## Running Games

**To Run a Game Dummy:**
1. Go to the **Installed Games** tab
2. Select the game you want to run
3. Click **Run Selected** (or double-click the game)
4. A new console window will open with the dummy process
5. Discord (or other apps) should now detect the game

**Important Notes:**
- The console window must stay open for the game to appear as running
- Close the console window to stop the game presence
- You can run multiple game dummies simultaneously
- The dummy uses minimal system resources

**Verification:**
- Check Discord to see if your game status appears
- The game name should match what you configured
- It may take a few seconds for Discord to detect the process

---

## Uninstalling Games

Uninstalling removes the game dummy from your system but keeps it in your Available Games library.

**To Uninstall:**
1. Go to the **Installed Games** tab
2. Select the game to uninstall
3. Click **Uninstall Selected**
4. Confirm the action in the dialog
5. The game will be removed from Installed Games

**What Gets Removed:**
- The dummy executable file
- The parent folder (if empty)
- The game returns to Available-only status

**What Stays:**
- The game entry in your library
- Your configuration for that game
- You can reinstall it anytime

---

## Using the Official Database

### Accessing the Database

The official game database is hosted online and contains pre-configured game entries.

**Database URL:** `https://pattycoder.is-a.software/projects/dummy_installer/paths.json`

### Features

- Curated list of popular games
- Correct executable names and folder structures
- Semi-regular updates with new games

### Updating Your Library

1. Click **Add from Database** periodically to check for new games
2. The application automatically filters out games you already have
3. Only new games will be shown for selection
4. This is the easiest way to expand your game library

### Offline Usage

If the database cannot be reached:
- An error message will appear
- You can still use manually added games
- Retry when internet connection is restored

---

## File Structure

Understanding the file structure helps with troubleshooting and manual management.

```
gui_app.exe                     (Main application)
│
├── files/
│   ├── dummy.exe               (Base dummy executable)
│   └── gamepaths.json          (Your game library)
│
└── dummy_gamepaths/            (Installed games)
    ├── Game1_Folder/
    │   └── game1.exe
    ├── Game2_Folder/
    │   └── game2.exe
    └── ...
```

### Key Files

**gamepaths.json**
- Stores all your game configurations
- JSON format with name, parent_folder, and file_name
- Can be manually edited if needed
- Backup this file to preserve your library

**dummy.exe**
- The base executable that gets copied for each game
- Must remain in the files/ folder
- All installed games are copies of this file

**dummy_gamepaths/**
- Contains all installed game dummies
- Safe to delete folders manually if needed (use Uninstall instead)

---

## Troubleshooting

### Game Not Detected by Discord

**Possible Solutions:**
1. Verify the executable name matches the real game
2. Restart Discord
3. Check Discord's Game Activity settings
4. Ensure the dummy process is still running (console window open)
5. Try adding the game path manually in Discord settings

### Cannot Install Game

**Check:**
- `files/dummy.exe` exists
- You have write permissions in the application folder
- Parent folder name doesn't contain invalid characters
- Disk space is available

### Database Won't Load

**Troubleshooting Steps:**
1. Check your internet connection
2. Verify the URL is accessible in a web browser
3. Check if a firewall is blocking the application
4. Try again later (server might be temporarily down)

### Game Already Installed Error

This means the game is already in your Installed Games list. To reinstall:
1. Uninstall the game first
2. Then install it again

### Missing Files After Uninstall

This is normal behavior. Uninstalling removes the dummy executable. To get it back:
1. Go to Available Games
2. Install the game again

---

## Advanced Tips

### Backup Your Library

To backup your game library:
1. Copy `files/gamepaths.json` to a safe location
2. Restore by replacing the file and restarting the app

### Batch Operations

To quickly set up multiple games:
1. Use "Add from Database"
2. Click "Select All"
3. All games will be added at once
4. Install them individually as needed

### Resource Usage

Dummy processes use minimal resources:
- About 10MB RAM per process
- No CPU usage when idle
- No network activity
- Safe to run many simultaneously

### Portable Installation

The entire application is portable:
1. Copy the whole folder to a USB drive
2. Run from any Windows computer
3. Your library travels with you
4. No installation or registry changes needed

---

## Safety and Privacy

### What This Application Does NOT Do

- Does not modify Discord or any other applications
- Does not send data over the internet (except database fetch)
- Does not install drivers or system services
- Does not require administrator privileges
- Does not access your actual game files
- Does not download actual gamefiles onto your computer

### What It Does

- Creates simple dummy processes
- Manages local configuration files
- Fetches public game data from the official database
- Everything runs in user space

### Antivirus Warnings

Some antivirus software may flag gui_app.exe because:
- It's not signed
- I don't have any plans to sign it

This is a false positive. The gui_app executable is harmless, as long as you got it directly from me.

---

## Credits

**Created by:** PattyCoder

**Development Assistance:** ChatGPT, Claude

**Official Website:** https://pattycoder.is-a.software/

**Support:** As this is a personal and non-public project, please contact me directly via Discord for support.

---

**Thank you for using the Dummy Game Installer!**

For other projects from this creator, visit: https://pattycoder.is-a.software/
