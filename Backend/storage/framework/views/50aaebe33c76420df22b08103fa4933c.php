<?php if (isset($component)) { $__componentOriginal9ac128a9029c0e4701924bd2d73d7f54 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54 = $attributes; } ?>
<?php $component = App\View\Components\AppLayout::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('app-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\AppLayout::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
    <div class="max-w-4xl mx-auto py-10">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Profil Saya</h2>

            <div class="flex items-center space-x-6">
                <?php if(Auth::user()->profile_picture): ?>
                    <img src="<?php echo e(asset('storage/' . Auth::user()->profile_picture)); ?>" alt="Foto Profil" class="w-24 h-24 rounded-full object-cover">
                <?php else: ?>
                    
                    <img src="https://via.placeholder.com/100" alt="Default Foto" class="w-24 h-24 rounded-full object-cover">
                <?php endif; ?>

                <div>
                    <p class="text-lg font-semibold"><?php echo e(Auth::user()->name); ?></p>
                    <p class="text-gray-600"><?php echo e(Auth::user()->email); ?></p>
                </div>
            </div>

            <a href="<?php echo e(route('profile.edit')); ?>" class="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300">
                Edit Profil & Foto
            </a>
            
            
            <a href="<?php echo e(route('password.edit')); ?>" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
                Ganti Password
            </a>

            
            <form method="POST" action="<?php echo e(route('logout')); ?>" class="mt-6">
                <?php echo csrf_field(); ?>
                <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    <?php echo e(__('Logout')); ?>

                </button>
            </form>
        </div>
    </div>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54)): ?>
<?php $attributes = $__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54; ?>
<?php unset($__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9ac128a9029c0e4701924bd2d73d7f54)): ?>
<?php $component = $__componentOriginal9ac128a9029c0e4701924bd2d73d7f54; ?>
<?php unset($__componentOriginal9ac128a9029c0e4701924bd2d73d7f54); ?>
<?php endif; ?><?php /**PATH C:\xampp\htdocs\Rinja\rinja\resources\views/profile/show.blade.php ENDPATH**/ ?>