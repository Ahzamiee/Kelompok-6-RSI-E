<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\OtpController;
use Illuminate\Support\Facades\Mail;
use App\Mail\OtpMail;
use Illuminate\Support\Facades\Log;

// Halaman utama (/) diarahkan ke dashboard (publik)
Route::get('/', function () {
    return view('dashboard');
});

// Dashboard — tetap bisa diakses publik
Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

// Verifikasi OTP
Route::get('/verify-otp', [OtpController::class, 'showVerifyForm'])->name('verify.otp');
Route::post('/verify-otp', [OtpController::class, 'verifyOtp'])->name('verify.otp.post');

// Tes kirim email (opsional, bisa dihapus setelah dites)
Route::get('/test-email', function() {
    try {
        Mail::to('rinjarsi@gmail.com')->send(new OtpMail(123456));
        return 'Email terkirim!';
    } catch (\Exception $e) {
        Log::error($e->getMessage());
        return 'Gagal kirim email: ' . $e->getMessage();
    }
});

// Route untuk user yang sudah login
Route::middleware('auth')->group(function () {
    // Halaman profil (tampil dulu data user)
    Route::get('/profile', [ProfileController::class, 'show'])->name('profile.show');

    // Edit profil dan update
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    // Hapus akun
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/profile/password', [ProfileController::class, 'showPasswordForm'])->name('password.edit');
Route::put('/profile/password', [ProfileController::class, 'updatePassword'])->name('password.update');
require __DIR__.'/auth.php';