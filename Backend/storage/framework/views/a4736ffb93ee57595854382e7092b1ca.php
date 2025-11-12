<?php $__env->startComponent('mail::message'); ?>
# Kode Verifikasi Anda

Halo!

Berikut kode OTP Anda untuk verifikasi akun di **Taman Nasional Rinjani**:

<?php $__env->startComponent('mail::panel'); ?>
**<?php echo new \Illuminate\Support\EncodedHtmlString($otp); ?>**
<?php echo $__env->renderComponent(); ?>

Kode ini berlaku selama 5 menit.  
Jangan bagikan kepada siapa pun.

Terima kasih,  
**Taman Nasional Rinjani**
<?php echo $__env->renderComponent(); ?>
<?php /**PATH C:\xampp\htdocs\Rinja\rinja\resources\views/emails/otp.blade.php ENDPATH**/ ?>