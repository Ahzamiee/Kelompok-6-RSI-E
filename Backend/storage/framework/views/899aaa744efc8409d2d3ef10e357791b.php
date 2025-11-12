<nav class="bg-green-700 text-white px-6 py-3 flex justify-between items-center shadow-md">
    <div class="text-xl font-bold">🌿 Rinjani</div>

    <ul class="flex space-x-6">
        <li><a href="/" class="hover:text-yellow-300">Home</a></li>
        <li><a href="/berita" class="hover:text-yellow-300">Berita</a></li>
        <li><a href="/forum" class="hover:text-yellow-300">Forum</a></li>
        <li><a href="/informasi" class="hover:text-yellow-300">Informasi</a></li>
    </ul>

    <div>
        <?php if(auth()->guard()->check()): ?>
            
            <a href="<?php echo e(route('profile.show')); ?>" class="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300">
                Profil
            </a>
        <?php else: ?>
            <a href="<?php echo e(route('login')); ?>" class="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300">
                Login
            </a>
        <?php endif; ?>
    </div>
</nav><?php /**PATH C:\xampp\htdocs\Rinja\rinja\resources\views/layouts/navigation.blade.php ENDPATH**/ ?>