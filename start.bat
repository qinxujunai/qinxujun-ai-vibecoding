@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"

echo ==============================================
echo    Welcome to ai.vibecoding Local Environment
echo ==============================================
echo.

:: Check for Node.js
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed.
    echo Please install Node.js ^(v20.x or higher^) from https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('node -v') do (
    echo [SUCCESS] Node.js detected: %%v
)

:: Install dependencies
echo.
echo [1/2] Installing / Checking dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] npm install failed.
    pause
    exit /b 1
)

:: Start development server
echo.
echo [2/2] Starting Development Server...
echo A new browser tab should open shortly.
echo.

start "" /b powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Sleep -Seconds 3; Start-Process 'http://localhost:3000'"
call npm run dev -- --host 0.0.0.0

pause
