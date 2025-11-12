<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request; // ⬅️ Pastikan ini ada
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    // 1. Method SHOW (yang kamu buat untuk menampilkan data profil)
    public function show(): View
    {
        return view('profile.show');
    }

    // 2. Method EDIT (yang hilang dan menyebabkan error)
    public function edit(Request $request): View
    {
        return view('profile.edit', [
            'user' => $request->user(),
        ]);
    }

    // 3. Method UPDATE (sudah dimodifikasi untuk upload foto)
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();

        // Logika upload foto profil (Validasi sudah dilakukan di ProfileUpdateRequest)
        if ($request->hasFile('profile_picture')) {
            // Hapus foto lama jika ada
            if ($user->profile_picture) {
                Storage::disk('public')->delete($user->profile_picture);
            }

            // Simpan foto baru
            $path = $request->file('profile_picture')->store('profile-pictures', 'public');
            $user->profile_picture = $path;
        }

        // Menggunakan fill untuk nama dan email (sudah divalidasi oleh Request)
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save(); // Simpan semua perubahan (termasuk profile_picture)

        return Redirect::route('profile.show')->with('status', 'profile-updated');
    }

    // 4. Method DESTROY
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function showPasswordForm(): View
    {
        return view('profile.password.edit');
    }

    /**
     * Menangani update password
     */
    public function updatePassword(Request $request): RedirectResponse
    {
        // PENTING: Untuk mengupdate password, kita pakai proses Breeze bawaan
        // Gunakan request yang sesuai

        $request->validateWithBag('updatePassword', [
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($request->password),
        ]);

        return Redirect::route('profile.show')->with('status', 'password-updated');
    }


}