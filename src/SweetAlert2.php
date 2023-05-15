<?php

declare(strict_types=1);

namespace Yii\Assets;

use Yiisoft\Assets\AssetBundle;

/**
 * Custom Js for Sweet Alert2 handler message.
 */
final class SweetAlert2 extends AssetBundle
{
    public string|null $basePath = '@assets';
    public string|null $baseUrl = '@assetsUrl';
    public string|null $sourcePath = __DIR__ . '/js';
    public array $js = ['sweetalert.js'];
}
