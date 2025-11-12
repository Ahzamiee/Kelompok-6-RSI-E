@component('mail::message')
# Kode Verifikasi Anda

Halo!

Berikut kode OTP Anda untuk verifikasi akun di **Rinja**:

@component('mail::panel')
**{{ $otp }}**
@endcomponent

Kode ini berlaku selama 5 menit.  
Jangan bagikan kepada siapa pun.

Terima kasih,  
**Rinja**
@endcomponent
